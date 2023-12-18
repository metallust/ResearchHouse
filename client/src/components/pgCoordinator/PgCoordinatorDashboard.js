import React from "react";
// import StudentSidebar from "../student/StudentSidebar";
import PgCoordinatorSidebar from "./PgCoordinatorSidebar";
import AddStudent from "./AddStudent";
import { Outlet } from "react-router";

const PgCoordinatorDashboard = () => {
	return (
		<div className='d-flex'>
			<div
				style={{
					backgroundColor: "transparent",
					minHeight: "100vh",
					width: "21%",
				}}
			>
				<div className="d-flex">
					<PgCoordinatorSidebar />
					<Outlet/>
				</div>
			</div>
		</div>
	);
};

export default PgCoordinatorDashboard;
