import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";
import Response from "./utils/response.js";
import { Server } from "socket.io";

import admin from "./routes/Admin/Index.js";
// import auth from "./routes/Admin/auth.js";

const io = new Server({ cors: true });
const app = express();
const port = 5000;
const emailToSocketMapping = new Map();
const socketToEmailMapping = new Map();

// socket connection
io.on("connection", (socket) => {
	logger.info("New Connection ...");
	socket.on("join-room", (data) => {
		const { roomId, emailId } = data;
		logger.info(`User ${emailId} Joined ${roomId}`);
		emailToSocketMapping.set(emailId, socket.id);
		socketToEmailMapping.set(socket.id, emailId);
		socket.join(roomId);
		socket.emit("joined-room", { roomId });
		socket.broadcast.to(roomId).emit("user-joined", { emailId, socketId: socket.id });
	});

	socket.on("call-user", ({ to, emailId, offer }) => {
		logger.info(`Call to ${emailId} `);
		const from = socketToEmailMapping.get(socket.id);
		socket.to(to).emit("incomming-call", { from, offer });
	});

	socket.on("answer-call", (data) => {
		const { emailId, answer } = data;
		const socketId = emailToSocketMapping.get(emailId);
		logger.info(`Answering ${emailId}`);
		io.to(socketId).emit("call-accepted", { answer });
	});
});

app.use(cors());
app.use(express.json());

// Routes admin
app.use("/api/admin", admin);

// Check
app.get("/", (req, res) => {
	res.send(new Response(200, "Server is running", null));
});

app.listen(port, () => logger.info(`Server running on port http://localhost:${port}`));
io.listen(5001);
