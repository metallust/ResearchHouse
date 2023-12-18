const GUIDE_QUERY = {
	SELECT_GUIDE: "SELECT * FROM guide ORDER BY created_at DESC",
	SELECT_GUIDE_BY_ID: "SELECT * FROM guide WHERE guide_id = ?",
	CREATE_GUIDE: "INSERT INTO guide (guide_id, college_id, name, phone, email, password, domain, experience, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
	UPDATE_GUIDE: "UPDATE guide SET college_id = ?, name = ?, phone = ?, email = ?, password = ?, domain = ?, experience = ?, profile_pic = ? WHERE guide_id = ?",
	DELETE_GUIDE: "DELETE FROM guide WHERE guide_id = ?",
};
export default GUIDE_QUERY;
