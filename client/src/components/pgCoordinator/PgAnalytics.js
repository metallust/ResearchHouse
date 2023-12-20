import React, { useState } from "react";
import { Pie } from "./Pie";
import Pacman from "./Pacman";

const PgAnalytics = () => {
	const [tab, setTab] = useState(0);
	const handleSave = () => {};
	const [ca, setCa] = useState(5.6);
	const [cb, setCb] = useState(43);
	const [cc, setCc] = useState(12);
	const [cd, setCd] = useState(75);

	const guideDomains = [
		"Machine Learning",
		"Computer Networks",
		"Renewable Energy",
		"Structural Engineering",
		"Artificial Intelligence",
		"Biomedical Engineering",
	];
	const card = {
		backgroundColor: "#E1F8FF",
		height: "100%",
		width: "32%",
		border: "none",
		borderRadius: "10px",
		boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
		padding: "9px 13px",
	};
	return (
		<div>
			<div
				className='d-flex justify-content-between'
				style={{
					height: "28vh",
					margin: "10px 2rem",
					maxHeight: "180px",
				}}
			>
				<div style={card}>
					<div className='h5'>Student/Guide Ratio</div>
					<div className='d-flex align-items-baseline'>
						<div style={{ fontSize: "2.5rem", fontWeight: "600" }}>
							{ca}
						</div>
						<div className='ms-3'>{7 - ca} less than Maximum</div>
					</div>
					<div className='mt-2'>Recommended Maximum 7</div>
				</div>
				<div style={card}>
					<div className='h5'>Student Allocation</div>
					<div className='d-flex align-items-baseline '>
						<h3 className='me-3'>{cb}</h3> Students Allocated
					</div>
					<div className='d-flex align-items-baseline '>
						<h3 className='me-3'>{cc}</h3> Students Remaining
					</div>
					<div
						className='btn d-flex justify-content-center'
						style={{ backgroundColor: "#004257", color: "white" }}
					>
						Allocate
					</div>
				</div>
				<div style={card}>
					<div className='h5'>Submission in Deadline</div>
					<div>
						<Pacman />
					</div>
				</div>
			</div>
			<div>
				<Pie />
			</div>
		</div>
	);
};

export default PgAnalytics;
