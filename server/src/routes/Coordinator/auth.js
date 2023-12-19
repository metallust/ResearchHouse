import express from "express";

import logger from "../../utils/logger.js";
import Response from "../../utils/response.js";
import pool from "../../config/mysql.config.js";

const router = express.Router();
// define the router after api/coordinator/auth/

router.get("/", async (req, res) => {
	const result = await pool.query("SELECT * FROM coordinator");
	res.status(200).json(
		new Response(200, "Coordinator auth routes", result[0])
	);
});

// Router 1: this is for creating the new coordinator
router.post("/createuser", async (req, res) => {
	// creating a hash of the password using bcryptjs
	// const paswordhash = req.body.password;

	try {
		// checking if the email is already registered
		let user = await pool.query(
			"SELECT * FROM coordinator WHERE email = ?",
			[req.body.email]
		);
		// logger.info(user);

		if (user[0].length)
			return res
				.status(400)
				.json(new Response(400, "User already exists", user[0].length));

		// adding the info to the database
		// TODO: ADD query to add the user to the database username email, hashpassword
		console.log(req.body);
		const {
			aishe,
			collegeName,
			state,
			district,
			city,
			fullName,
			email,
			phone,
			password,
			confirmPassword,
			consentLetter,
		} = req.body;
		await pool.query(
			"INSERT INTO college (aishe_code, college_name, college_city, college_district, college_state, college_uni, profile_pic, iic_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
			[aishe, collegeName, city, district, state, "SOLAPUR", null, 1212]
		);
		await pool.query(
			"INSERT INTO coordinator ( college_id, email, phone, profile_pic) VALUES (?, ?, ?, ?)",
			[aishe, email, phone, null]
		);

		res.status(200).json(
			new Response(200, "coordinator created", { authtoken })
		);
		logger.info("coordinator created");
	} catch (error) {
		logger.error(error);
		res.status(500).json(
			new Response(500, "Internal server error", error.message)
		);
	}
});

//Router 2: to login the user
router.post("/login", async (req, res) => {
	// returning invalid info if any
	// const errors = validationResult(req);
	// if (!errors.isEmpty()) return res.status(400).json(new Response(400, "Invalid inputs", errors.array()));

	try {
		// fetching the user
		// TODO: ADD query to fetch the user
		// const user = pool.query("SELECT * FORM users")
		let user = [];
		if (!user)
			return res
				.status(400)
				.json(
					new Response(
						400,
						"Please try login with correct credentials",
						null
					)
				);

		// checking if the password is correct
		const bcryptjscompare = await bcryptjs.compare(
			req.body.password,
			user.password
		);
		if (!bcryptjscompare)
			return res
				.status(400)
				.json(
					new Response(
						400,
						"Please try login with correct credentials",
						null
					)
				);

		// creating a authtoken using jsonwebtoken
		const data = {
			user: user.id,
			type: "coordinator",
		};
		const authtoken = jwt.sign(data, JWT_SECREAT);
		res.status(200).json(
			new Response(200, "coordinator logged in", { authtoken })
		);

		logger.info("coordinator logged in");
	} catch (error) {
		logger.error(error);
		res.status(500).json(
			new Response(500, "Internal server error", error.message)
		);
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
		res.status(500).json(
			new Response(500, "Internal server error", error.message)
		);
	}
});

export default router;
