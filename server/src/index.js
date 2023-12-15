import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";
import Response from "./utils/response.js";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Routes
// app.use("/api/auth", auth);

// Check
app.get("/", (req, res) => {
	res.send(new Response(200, "Server is running", null));
});

app.listen(port, () => logger.info(`Server running on port http://localhost:${port}`));
