import React from "react";

const PgCoordinatorSidebar = () => {
	const branch = "Computer Science";
	const batch = "2022-2023";
	const schedule = "Presentation";
	const scheduledate = "05/12/2012";
	return (
		<div className='container d-flex flex-column align-items-center'>
			<div
				className='logo'
				style={{
					fontSize: "28px",
					fontWeight: "700",
					color: "#004257",
					fontFamily: "Roboto, sans-serif",
					marginBottom: "5px",
					marginTop: "20px",
				}}
			>
				ResearchHouse
			</div>
			<div
				className='container py-2'
				style={{
					backgroundColor: "#E1F8FF",
					width: "90%",
					height: "fit-content",
					borderRadius: "10px",
					border: "none",
					padding: "20px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "#E1F8FF",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
				}}
			>
				{branch}
				<div></div>
				{batch}
				<div></div>
				<div
					style={{
						fontSize: "12px",
					}}
				>
					Upcomming : {schedule} ({scheduledate})
				</div>
			</div>
			<div
				className='container mt-3 py-2'
				style={{
					backgroundColor: "#E1F8FF",
					width: "90%",
					height: "fit-content",
					borderRadius: "10px",
					border: "none",
					padding: "20px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "#E1F8FF",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
				}}
			>
				Department
			</div>

			<div
				className='container mt-3 py-2'
				style={{
					backgroundColor: "#E1F8FF",
					width: "90%",
					height: "fit-content",
					borderRadius: "10px",
					border: "none",
					padding: "20px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "#E1F8FF",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
				}}
			>
				Batch
			</div>
		</div>
	);
};
export default PgCoordinatorSidebar;
