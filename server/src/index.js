import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";
import multer from "multer";
import Response from "./utils/response.js";
import pool from "./config/mysql.config.js";
import axios from "axios";
import FormData from "form-data";

import { Server } from "socket.io";

import admin from "./routes/Admin/Index.js";
import coordinator from "./routes/Coordinator/Index.js";
import fs from "fs";
import { spawn } from "child_process";
// import auth from "./routes/Admin/auth.js";

const io = new Server({ cors: true });
const app = express();
const port = 5000;

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
	logger.info(`Socket Connected`, socket.id);
	socket.on("room:join", (data) => {
		const { email, room } = data;
		emailToSocketIdMap.set(email, socket.id);
		socketidToEmailMap.set(socket.id, email);
		io.to(room).emit("user:joined", { email, id: socket.id });
		socket.join(room);
		io.to(socket.id).emit("room:join", data);
	});

	socket.on("user:call", ({ to, offer }) => {
		io.to(to).emit("incomming:call", { from: socket.id, offer });
	});

	socket.on("call:accepted", ({ to, ans }) => {
		io.to(to).emit("call:accepted", { from: socket.id, ans });
	});

	socket.on("peer:nego:needed", ({ to, offer }) => {
		logger.info("peer:nego:needed", offer);
		io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
	});

	socket.on("peer:nego:done", ({ to, ans }) => {
		logger.info("peer:nego:done", ans);
		io.to(to).emit("peer:nego:final", { from: socket.id, ans });
	});
});

app.use(cors());
app.use(express.json());

// Routes admin
// app.use("/api/admin", admin);
app.use("/api/coordinator", coordinator);

// Check
app.get("/", (req, res) => {
	res.send(`<form action="/upload" method="post" enctype="multipart/form-data"><input type="file" name="file" /><input type="submit" value="Upload" /></form>`);
});

app.post("/upload", upload.single("file"), async (req, res) => {
	try {
		const file = req.file;
		if (!file) {
			return res.status(400).send("No file uploaded");
		}
		// Save file data to the database
		await pool.query("INSERT INTO dissertation (student_id, filedata) VALUES (?, ?)", ["1", file.originalname, file.buffer]);

		// Send file to python server using axios
		const fileBuffer = file.buffer;
		// Create FormData and append the file
		const formData = new FormData();
		formData.append("file", fileBuffer, { filename: file.originalname });

		// Make the Axios POST request
		axios
			.post("http://localhost:5003/summarize", formData, {
				headers: {
					...formData.getHeaders(),
				},
			})
			.then((response) => {
				console.log("Response:", response.data);
				pool.query("INSERT INTO summary (student_id, summary) VALUES (?, ?)", ["1", response.data]).then((result) => {
					console.log("Result:", result);
				});
			})
			.catch((error) => {
				console.error("Error:", error.message);
			});

		// send request to python server for
		return res.send("File uploaded and saved to the database successfully");
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
});

app.post("/chat", async (req, res) => {
	const { message } = req.body;
	// get summaries from database
	const result = await pool.query("SELECT summary FROM summary");
	const summaries = result[0];

	const temp = summaries.map((summary) => summary.summary);
	for (let i = 0; i < temp.length; i++) {
		try {
			const score = await axios.post("http://localhost:5003/similarity", {
				summary: temp[i],
				message: message,
			});
			logger.info(score);
		} catch (err) {
			logger.error(err);
			res.status(500).send(err);
		}
	}
});

app.get("/fetchsummaries", async (req, res) => {
	// fetch all summaries from database
	const result = await pool.query("SELECT summary FROM summary");
	const summaries = result[0];
	const temp = summaries.map((summary) => summary.summary);
	res.status(200).send(new Response(200, "Summaries fetched successfully", temp));
});

app.listen(port, () => logger.info(`Server running on port http://localhost:${port}`));
io.listen(5001);
