const COLLEGE_QUERY = {
	SELECT_COLLEGE: "SELECT * FROM college ORDER BY created_at DESC",
	SELECT_COLLEGE_BY_ID: "SELECT * FROM college WHERE college_id = ?",
	CREATE_COLLEGE: "INSERT INTO college (college_id, aishe_code, college_name, college_city, college_district, college_state, college_uni, profile_pic, iic_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
	UPDATE_COLLEGE: "UPDATE college SET college_name = ?, college_city = ?, college_district = ?, college_state = ?, college_uni = ?, profile_pic = ?, iic_code = ? WHERE college_id = ?",
	DELETE_COLLEGE: "DELETE FROM college WHERE college_id = ?",
};
export default COLLEGE_QUERY;
