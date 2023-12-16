import React from "react";
import StudentSidebar from "../student/StudentSidebar";
import PgCoordinatorSidebar from "./PgCoordinatorSidebar";

const PgCoordinatorDashboard = () => {
	return (
		<div>
			<div
				style={{
					backgroundColor: "transparent",
					minHeight: "100vh",
					width: "21%",
				}}
			>
				<PgCoordinatorSidebar />
			</div>
		</div>
	);
};

export default PgCoordinatorDashboard;
