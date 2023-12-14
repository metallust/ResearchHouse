import React from "react";
import StudentTodo from "./StudentTodo";

const StudentSidebar = () => {
	const name = "Basit";
	const section = "section";
	return (
		<aside className='d-flex flex-column align-items-center overflow-hidden position-sticky top-0' style={{ height: "100vh" }}>
			<div className='h2 mt-4 fw-bold'>ResearchHouse</div>
			<div className='h4 mt-2'>Hi {name}</div>
			<div
				className='container mt-2 py-2'
				style={{
					backgroundColor: "#E1F8FF",
					width: "80%",
					height: "fit-content",
					borderRadius: "10px",
					boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
				}}
			>
				ongoing {section}
				<div></div>
				deadline : dd/mm/yyyy
			</div>
			<StudentTodo />
			<StudentTodo />
			<StudentTodo />
		</aside>
	);
};

export default StudentSidebar;
