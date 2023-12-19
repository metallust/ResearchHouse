import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";
import Response from "./utils/response.js";
import { Server } from "socket.io";

import admin from "./routes/Admin/Index.js";
import coordinator from "./routes/Coordinator/Index.js";
// import auth from "./routes/Admin/auth.js";

const io = new Server({ cors: true });
const app = express();
const port = 5000;

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
app.use("/api/admin", admin);
app.use("/api/coordinator", coordinator);

// Check
app.get("/", (req, res) => {
	res.send(new Response(200, "Server is running", null));
});

app.listen(port, () => logger.info(`Server running on port http://localhost:${port}`));
io.listen(5001);
