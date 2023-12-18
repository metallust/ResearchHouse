import React from "react";
// import StudentSidebar from "../student/StudentSidebar";
import PgCoordinatorSidebar from "./PgCoordinatorSidebar";
import PgCoordinatorRightSidebar from "./PgCoordinatorRightSidebar";
import AddStudent from "./AddStudent";
import { Outlet } from "react-router";

const PgCoordinatorDashboard = () => {
	return (
		<div className='d-flex justify-content-between'>
			<div
				style={{
					backgroundColor: "transparent",
					minHeight: "100vh",
					width: "21%",
				}}
			>
				<div className='d-flex'>
					<PgCoordinatorSidebar />
					<Outlet />
				</div>
			</div>
			<div
				style={{
					backgroundColor: "transparent",
					minHeight: "100vh",
					width: "21%",
				}}
			>
				<div>
					<AddStudent />
					<Outlet />
				</div>
			</div>
			<div
				style={{
					backgroundColor: "transparent",
					minHeight: "100vh",
					width: "21%",
				}}
			>
				<div>
					<PgCoordinatorRightSidebar />
				</div>
			</div>
		</div>
	);
};

export default PgCoordinatorDashboard;
