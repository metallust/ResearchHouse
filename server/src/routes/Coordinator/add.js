import express from "express";

import logger from "../../utils/logger.js";
import Response from "../../utils/response.js";
import pool from "../../config/mysql.config.js";

const router = express.Router();
// define the router after api/coordinator/auth/

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

export default router;
