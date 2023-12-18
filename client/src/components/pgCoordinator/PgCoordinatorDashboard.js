import React from "react";
// import StudentSidebar from "../student/StudentSidebar";
import PgCoordinatorSidebar from "./PgCoordinatorSidebar";

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
				<div>
					<PgCoordinatorSidebar />
				</div>
			</div>
		</div>
	);
};

export default PgCoordinatorDashboard;
