import React, { useState } from "react";

const GuideSidebar = () => {
	const card = {
		height: "150px",
		width: "100%",
		maxWidth: "300px",
		backgroundColor: "#E1F8FF",
		borderRadius: "6px",
		padding: "0 10px ",
		margin: "10px 10px 10px 10px",
		boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
		position: "relative",
		overflow: "hidden",
	};

	const title = {
		fontSize: "15px",
		fontWeight: "bold",
		top: "0",
		left: "0",
		position: "absolute",
		width: "100%",
		padding: "15px",
	};

	const body = {
		height: "100%",
		overflowY: "scroll",
		paddingY: "15px",
	};

	const [activeDepartment, setActiveDepartment] = useState(null);
	const [activeBatch, setActiveBatch] = useState(null);

	const handleDepartmentClick = (index) => {
		setActiveDepartment(index);
	};

	const handleBatchClick = (index) => {
		setActiveBatch(index);
	};

	const departments = [
		"Computer Science",
		"Information Technology",
		"Mechanical Engg",
		"Civil Engineering",
		"Artificial Intelligence",
		"Data Science",
	];

	const batches = ["2022-23", "2021-22"];

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
				className='d-flex flex-column justify-content-center'
				style={card}
			>
				<div className='text-center fw-bold'>
					Computer Science
					<div></div>
					2022-2023
					<div></div>
				</div>
				<p className='fw-semibold'>
					Upcoming: Presentation (05/12/2012)
				</p>
			</div>

			<div style={card}>
				<div style={title}>Departments</div>
				<div style={{ height: "40px" }}></div>
				<div style={body}>
					<ul className='list-group px-2'>
						{departments.map((dept, index) => {
							return (
								<div
									key={dept}
									className='d-flex justify-content-between my-1 p-2 rounded'
									style={{
										backgroundColor:
											activeDepartment === index
												? "#004257"
												: "",
										color:
											activeDepartment === index
												? "white"
												: "",
									}}
									onClick={() => handleDepartmentClick(index)}
									type='button'
								>
									{dept}
								</div>
							);
						})}
					</ul>
				</div>
			</div>

			<div style={card}>
				<div style={title}>Batches</div>
				<div style={{ height: "40px" }}></div>
				<div style={body}>
					<ul className='list-group px-2'>
						{batches.map((batch, index) => {
							return (
								<div
									key={batch}
									className='d-flex justify-content-between my-1 p-2 rounded'
									style={{
										backgroundColor:
											activeBatch === index
												? "#004257"
												: "",
										color:
											activeBatch === index
												? "white"
												: "",
									}}
									onClick={() => handleBatchClick(index)}
									type='button'
								>
									{batch}
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GuideSidebar;
