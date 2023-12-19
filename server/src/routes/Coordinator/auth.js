import express from "express";

import logger from "../../utils/logger.js";
import Response from "../../utils/response.js";
import pool from "../../config/mysql.config.js";

const router = express.Router();
// define the router after api/coordinator/auth/

router.get("/", async (req, res) => {
	const result = await pool.query("SELECT * FROM coordinator");
	res.status(200).json(new Response(200, "Coordinator auth routes", result[0]));
});

// Router 1: this is for creating the new coordinator
router.post("/createuser", async (req, res) => {
	// creating a hash of the password using bcryptjs
	const salt = await bcryptjs.genSalt(10);
	const paswordhash = await bcryptjs.hash(req.body.password, salt);

	try {
		// checking if the email is already registered
		let user = pool.query("SELECT * FROM users WHERE email = ?", [req.body.email]);

		if (user) return res.status(400).json(new Response(400, "User already exists", null));

		// adding the info to the database
		// TODO: ADD query to add the user to the database username email, hashpassword

		// creating a authtoken using jsonwebtoken
		data = {
			user: req.body.email,
			type: "coordinator",
		};

		res.status(200).json(new Response(200, "coordinator created", { authtoken }));
		logger.info("coordinator created");
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

//Router 2: to login the user
router.post("/login", async (req, res) => {
	// returning invalid info if any
	const errors = validationResult(req);
	if (!errors.isEmpty()) return res.status(400).json(new Response(400, "Invalid inputs", errors.array()));

	try {
		// fetching the user
		// TODO: ADD query to fetch the user
		let user = [];
		if (!user) return res.status(400).json(new Response(400, "Please try login with correct credentials", null));

		// checking if the password is correct
		const bcryptjscompare = await bcryptjs.compare(req.body.password, user.password);
		if (!bcryptjscompare) return res.status(400).json(new Response(400, "Please try login with correct credentials", null));

		// creating a authtoken using jsonwebtoken
		const data = {
			user: user.id,
			type: "coordinator",
		};
		const authtoken = jwt.sign(data, JWT_SECREAT);
		res.status(200).json(new Response(200, "coordinator logged in", { authtoken }));

		logger.info("coordinator logged in");
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

// Route 3: give user data to authenicated users
router.post("/getuser", async (req, res) => {
	try {
		const userid = req.userid;
		let user = []; //TODO: ADD query to fetch the user
		res.send({ success: true, message: "User info", user });
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

export default router;
