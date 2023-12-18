import Query from "../../queries/college.query.js";
import pool from "../../config/mysql.config.js";

const getCollege = async ({ ...parms }) => {
	const result = await pool(Query.SELECT_COLLEGE, [...parms]);
	return result;
};
