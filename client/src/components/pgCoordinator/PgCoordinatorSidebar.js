import React, { useState } from "react";
import Buttonbox from "./Buttonbox";

const PgCoordinatorSidebar = () => {
	const branch = "Computer Science";
	const batch = "2022-2023";
	const schedule = "Presentation";
	const scheduledate = "05/12/2012";

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
				className='d-flex flex-column justify-content-center'
				style={card}
			>
				<h6 className='text-center fw-bold'>
					{branch}
					<div></div>
					{batch}
					<div></div>
				</h6>
				<p className='fw-semibold'>
					Upcoming: {schedule} ({scheduledate})
				</p>
			</div>

			<div style={card}>
				<div style={title}>Departments </div>
				<div style={{ height: "40px" }}></div>
				<div style={body}>
					<ul className='list-group px-2'>
						{departments.map((e) => {
							return (
								<div
									key={e}
									className='d-flex justify-content-between
									my-1 p-2 rounded'
									type='button'
								>
									{e}
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
						{batches.map((e) => {
							return (
								<div
									key={e}
									className='d-flex justify-content-between
									my-1 p-2 rounded'
									type='button'
								>
									{e}
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PgCoordinatorSidebar;
