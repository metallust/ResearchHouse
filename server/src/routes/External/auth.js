import express from "express";
import { body, validationResult } from "express-validator";
import fetchuser from "../middleware/fetchuser";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import logger from "../../utils/logger";
import Response from "../../utils/response";
import pool from "../../config/mysql.config";

const JWT_SECREAT = "bittersweetjoy";
const router = express.Router();
// define the router after api/external/auth/

// Router 1: this is for creating the new external
router.post(
	"/createuser",

	// express validator check if the info in the request is valid
	[body("name", "Name can't be less that 3 character").isLength({ min: 3 }), body("email", "Give a valid Email ..").isEmail(), body("password", "Password should be greater than 5 characters").isLength({ min: 5 })],

	async (req, res) => {
		// returning invalid info if any
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json(new Response(400, "Invalid inputs", errors.array()));

		// creating a hash of the password using bcryptjs
		const salt = await bcryptjs.genSalt(10);
		const paswordhash = await bcryptjs.hash(req.body.password, salt);

		try {
			// checking if the email is already registered
			// TODO: ADD query to check if the user is already registered
			let user = pool.query("SELECT * FROM users WHERE email = ?", [req.body.email]);

			if (user) return res.status(400).json(new Response(400, "User already exists", null));

			// adding the info to the database
			// TODO: ADD query to add the user to the database username email, hashpassword

			// creating a authtoken using jsonwebtoken
			data = {
				user: req.body.email,
				type: "external",
			};
			const authtoken = jwt.sign(data, JWT_SECREAT);
			res.status(200).json(new Response(200, "external created", { authtoken }));
			logger.info("external created");
		} catch (error) {
			logger.error(error);
			res.status(500).json(new Response(500, "Internal server error", error.message));
		}
	}
);

//Router 2: to login the user
router.post(
	"/login",

	// express validator check if the info in the request is valid
	[body("email", "not a valid email").isEmail(), body("password", "password can't be blank").exists()],

	async (req, res) => {
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
				type: "external",
			};
			const authtoken = jwt.sign(data, JWT_SECREAT);
			res.status(200).json(new Response(200, "external logged in", { authtoken }));

			logger.info("external logged in");
		} catch (error) {
			logger.error(error);
			res.status(500).json(new Response(500, "Internal server error", error.message));
		}
	}
);

// Route 3: give user data to authenicated users
router.post("/getuser", fetchuser, async (req, res) => {
	try {
		const userid = req.userid;
		let user = []; //TODO: ADD query to fetch the user
		res.send({ success: true, message: "User info", user });
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

module.exports = router;
