import React, { useState } from "react";
import Buttonbox from "./Buttonbox";

const PgCoordinatorSidebar = () => {
	const branch = "Computer Science";
	const batch = "2022-2023";
	const schedule = "Presentation";
	const scheduledate = "05/12/2012";

	const departments = [
		"Computer Science",
		"Information Technology",
		"Mechanical Engg",
		"Civil Engineering",
		"Artificial Intelligence",
		"Data Science",
	];

	const batches = ["2022-23", "2021-22"];

	const [activeDepartment, setActiveDepartment] = useState(null);
	const [activeBatch, setActiveBatch] = useState(null);

	const handleDepartmentClick = (index) => {
		setActiveDepartment(index);
	};

	const handleBatchClick = (index) => {
		setActiveBatch(index);
	};

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
					Upcoming: {schedule} ({scheduledate})
				</div>
			</div>
			<div
				className='container mt-3 py-2'
				style={{
					backgroundColor: "#E1F8FF",
					width: "90%",
					height: "180px",
					borderRadius: "10px",
					border: "none",
					padding: "20px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
					overflowY: "scroll",
				}}
			>
				Departments
				<div></div>{" "}
				<div
					style={{
						height: "fit-content",
					}}
				>
					{departments.map((name, index) => (
						<div
							className='btn mt-2'
							style={{
								width: "90%",
								color:
									activeDepartment === index
										? "#E1F8FF"
										: "#004257",
								backgroundColor:
									activeDepartment === index
										? "#004257"
										: "transparent",
								border: "1px solid #004257",
								cursor: "pointer",
								transition: "background-color 0.3s, color 0.3s",
							}}
							key={index}
							onClick={() => handleDepartmentClick(index)}
						>
							{name}
						</div>
					))}
				</div>
			</div>
			<div
				className='container mt-3 py-2'
				style={{
					backgroundColor: "#E1F8FF",
					width: "90%",
					height: "180px",
					borderRadius: "10px",
					border: "none",
					padding: "20px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
					overflowY: "scroll",
				}}
			>
				Batches
				<div></div>{" "}
				<div
					style={{
						height: "fit-content",
					}}
				>
					{batches.map((name, index) => (
						<div
							className='btn mt-2'
							style={{
								width: "90%",
								color:
									activeBatch === index
										? "#E1F8FF"
										: "#004257",
								backgroundColor:
									activeBatch === index
										? "#004257"
										: "transparent",
								border: "1px solid #004257",
								cursor: "pointer",
								transition: "background-color 0.3s, color 0.3s",
							}}
							key={index}
							onClick={() => handleBatchClick(index)}
						>
							{name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PgCoordinatorSidebar;
