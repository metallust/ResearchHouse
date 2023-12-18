const COMMITTEE_QUERY = {
	SELECT_COMMITTEE: "SELECT * FROM committee ORDER BY created_at DESC",
	SELECT_COMMITTEE_BY_ID: "SELECT * FROM committee WHERE committee_id = ?",
	CREATE_COMMITTEE: "INSERT INTO committee (committee_id, college_id, name, phone, email, password, domain, experience, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
	UPDATE_COMMITTEE: "UPDATE committee SET college_id = ?, name = ?, phone = ?, email = ?, password = ?, domain = ?, experience = ?, profile_pic = ? WHERE committee_id = ?",
	DELETE_COMMITTEE: "DELETE FROM committee WHERE committee_id = ?",
};
export default COMMITTEE_QUERY;
