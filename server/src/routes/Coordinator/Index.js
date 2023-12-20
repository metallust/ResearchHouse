import express from "express";
import auth from "./auth.js";
import add from "./add.js";

const router = express.Router();
router.use("/auth", auth);
router.use("/add", add);

export default router;
