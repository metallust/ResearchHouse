const STUDENT_QUERY = {
	SELECT_STUDENT: "SELECT * FROM student ORDER BY created_at DESC",
	SELECT_STUDENT_BY_ID: "SELECT * FROM student WHERE student_id = ?",
	CREATE_STUDENT: "INSERT INTO student (student_id, college_id, name, phone, email, password, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?)",
	UPDATE_STUDENT: "UPDATE student SET college_id = ?, name = ?, phone = ?, email = ?, password = ?, profile_pic = ? WHERE student_id = ?",
	DELETE_STUDENT: "DELETE FROM student WHERE student_id = ?",
};
export default STUDENT_QUERY;
