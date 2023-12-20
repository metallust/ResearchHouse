import express from "express";

import logger from "../../utils/logger.js";
import Response from "../../utils/response.js";
import pool from "../../config/mysql.config.js";
import { sendMail } from "../../SendMail/index.js";

const router = express.Router();
// define the router after api/coordinator/auth/

router.post("/student", async (req, res) => {
	const { student, token } = req.body;
	const password = "12345678";
	const errors = [];
	for (let i = 0; i < student.length; i++) {
		const [prn, email, branch, batch] = student[i];
		try {
			let college_id = await pool.query("SELECT college_id FROM coordinator WHERE email = ?", [token]);
			college_id = college_id[0];
			logger.info(college_id);
			await pool.query("INSERT INTO student (college_id, student_id, email, password, branch, batch) VALUES (?, ?, ?, ?, ?, ?)", [college_id, prn, email, password, branch, batch]);
			logger.info("student added", email);
			sendMail(email, password)
				.then((res) => {
					logger.info(res);
				})
				.catch((err) => {
					logger.error(err);
				});
		} catch (error) {
			logger.error(error);
			errors.push(error.message);
		}
	}

	if (errors.length === 0) return res.status(500).json(new Response(500, "Successfully added students", { student }));
	res.status(500).json(new Response(500, "Internal server error", errors));
});

router.post("/guide", async (req, res) => {
	const { guide, token } = req.body;
	const password = "12345678";
	try {
		for (let i = 0; i < guide.length; i++) {
			const [prn, email, branch, batch] = guide[i];

			let college_id = await pool.query("SELECT college_id FROM coordinator WHERE email = ?", [token]);
			college_id = college_id[0];
			await pool.query("INSERT INTO guide (college_id, guide_id, email, password, branch, batch) VALUES (?, ?, ?, ?, ?, ?)", [college_id, prn, email, password, branch, batch]);
			logger.info("guide added", email);
		}

		return res.send({ guide });
	} catch (error) {
		logger.error(error);
		res.status(500).json(new Response(500, "Internal server error", error.message));
	}
});

export default router;
