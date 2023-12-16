import React from "react";
import StudentTodo from "./StudentTodo";

const StudentSidebar = () => {
	const name = "Basit";
	const section = "section";
	return (
		<div>
			<div className='h2 mt-4 fw-bold'>ResearchHouse</div>
			<div className='h4 mt-2'>Hi {name}</div>
			<div>
				Ongoing {section}
				deadline : dd/mm/yyyy
			</div>
			<StudentTodo />
			<StudentTodo />
			<StudentTodo />
		</div>
	);
};

export default StudentSidebar;
