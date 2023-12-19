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
	// const paswordhash = req.body.password;

	try {
		// checking if the email is already registered
		let user = await pool.query("SELECT * FROM coordinator WHERE email = ?", [req.body.email]);
		// logger.info(user);

		if (user[0].length) return res.status(400).json(new Response(400, "User already exists", user[0].length));

		// adding the info to the database
		// TODO: ADD query to add the user to the database username email, hashpassword
		console.log(req.body);
		const { aishe, collegeName, state, district, city, fullName, email, phone, password, confirmPassword, consentLetter } = req.body;
		await pool.query("INSERT INTO college (aishe_code, college_name, college_city, college_district, college_state, college_uni, profile_pic, iic_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [aishe, collegeName, city, district, state, "SOLAPUR", null, 1212]);
		await pool.query("INSERT INTO coordinator ( college_id, email, phone, profile_pic) VALUES (?, ?, ?, ?)", [aishe, email, phone, null]);

		const data = {
			user: email,
			type: "coordinator",
		};

		logger.info("coordinator created");
		res.status(200).json(new Response(200, "coordinator created", data));
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

//Router 2: to login the user
router.post("/login", async (req, res) => {
	// returning invalid info if any
	const { email, password } = req.body;

	try {
		// fetching the user
		// TODO: ADD query to fetch the user
		let user = await pool.query("SELECT * FROM coordinator WHERE email = ?", [email]);
		if (!user[0].length) return res.status(400).json(new Response(400, "Please try login with correct credentials", null));

		// checking if the password is correct
		// creating a authtoken using jsonwebtoken
		const data = {
			token: email,
			type: "coordinator",
		};
		res.status(200).json(new Response(200, "coordinator logged in", data));
		logger.info("coordinator logged in");
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

// Route 3: give user data to authenicated users
router.post("/getuser", async (req, res) => {
	try {
		const token = req.header("auth-token").trim();
		const email = token;
		let user = await pool.query("SELECT * FROM coordinator WHERE email = ?", [email]);
		res.status(200).json(new Response(200, "coordinator logged in", user[0]));
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

router.post("/addstudent", async (req, res) => {
	const { student, token } = req.body;
	const password = "12345678";
	try {
		for (let i = 0; i < student.length; i++) {
			const [prn, email, branch, batch] = student[i];

			let college_id = await pool.query("SELECT college_id FROM coordinator WHERE email = ?", [token]);
			college_id = college_id[0];
			logger.info(college_id);
			await pool.query("INSERT INTO student (college_id, student_id, email, password, branch, batch) VALUES (?, ?, ?, ?, ?, ?)", [college_id, prn, email, password, branch, batch]);
			logger.info("student added", email);
		}

		return res.send({ student });
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

router.post("/addguide", async (req, res) => {
	const { guide, token } = req.body;
	const password = "12345678";
	try {
		for (let i = 0; i < student.length; i++) {
			const [prn, email, branch, batch] = student[i];

			let college_id = await pool.query("SELECT college_id FROM coordinator WHERE email = ?", [token]);
			college_id = college_id[0];
			logger.info(college_id);
			await pool.query("INSERT INTO student (college_id, student_id, email, password, branch, batch) VALUES (?, ?, ?, ?, ?, ?)", [college_id, prn, email, password, branch, batch]);
			logger.info("student added", email);
		}

		return res.send({ student });
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

export default router;
