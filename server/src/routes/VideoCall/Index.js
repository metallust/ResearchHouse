import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

// define the router after api/vc/auth/
// Router 1: this is for creating the new user
router.get("/", async (req, res) => {
	res.send("hello world");
});

export default router;
