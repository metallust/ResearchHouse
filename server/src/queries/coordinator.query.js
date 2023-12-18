const COORDINATOR_QUERY = {
	SELECT_COORDINATOR: "SELECT * FROM coordinator ORDER BY created_at DESC",
	SELECT_COORDINATOR_BY_ID: "SELECT * FROM coordinator WHERE coordinator_id = ?",
	CREATE_COORDINATOR: "INSERT INTO coordinator (coordinator_id, college_id, email, phone, profile_pic) VALUES (?, ?, ?, ?, ?)",
	UPDATE_COORDINATOR: "UPDATE coordinator SET college_id = ?, email = ?, phone = ?, profile_pic = ? WHERE coordinator_id = ?",
	DELETE_COORDINATOR: "DELETE FROM coordinator WHERE coordinator_id = ?",
};
export default COORDINATOR_QUERY;
