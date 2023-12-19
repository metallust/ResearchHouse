import React, { useState } from "react";
import { Pie } from "./Pie";
import Pacman from "./Pacman";

const GuideAnalytics = () => {
	const [tab, setTab] = useState(0);
	const handleSave = () => {};

	const guideDomains = [
		"Machine Learning",
		"Computer Networks",
		"Renewable Energy",
		"Structural Engineering",
		"Artificial Intelligence",
		"Biomedical Engineering",
	];

	const containerstyle = {
		height: "180px",
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

	const cardheadername = {
		fontSize: "13px",
		display: "flex",
		justifyContent: "start",
	};

	const card = {
		height: "190px",
		width: "100%",
		maxWidth: "300px",
		backgroundColor: "#E1F8FF",
		borderRadius: "6px",
		padding: "0 10px ",
		marginRight: "10px",
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

	return (
		<div
			id='AddStudentModal'
			style={{
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div>
				<div
					style={{
						fontSize: "22px",
						fontWeight: "700",
						color: "#004257",
						fontFamily: "Roboto, sans-serif",
					}}
				>
					At a Glance
				</div>
				<div className='d-flex' style={{ height: "36vh" }}>
					<div className='container py-2' style={containerstyle}>
						<div style={cardheadername}>
							<p>Students/Guide Ratio :</p>
						</div>
						<div className='d-flex'>
							<div style={{ fontSize: "64px" }}>6</div>
							<div
								style={{
									fontSize: "10px",
									marginLeft: "60px",
									marginTop: "30px",
								}}
							>
								<div>1 Less than Maximum</div>
								<div>(Per Academic Year)</div>
							</div>
						</div>
						<div
							style={{
								fontSize: "10px",
								display: "flex",
								justifyContent: "between",
							}}
						>
							<div>Recommended Maximum:</div>
							<div>7 Students per Guide</div>
						</div>
					</div>
					<div className='container py-2 ' style={containerstyle}>
						<div style={cardheadername}>
							<p>Submissions in Deadline : Average</p>
							<Pacman />
						</div>
					</div>

					<div style={card}>
						<div style={title}>Chosen Domains</div>
						<div style={{ height: "40px" }}></div>
						<div style={body}>
							<ul className='list-group px-2'>
								{guideDomains.map((guideDomains, index) => {
									return (
										<div
											key={guideDomains}
											className='d-flex justify-content-between'
											type='text'
										>
											{guideDomains}
										</div>
									);
								})}
							</ul>
						</div>
					</div>
				</div>

				<div style={{ maxHeight: "160px" }}>
					<Pie />
				</div>
			</div>
		</div>
	);
};

export default GuideAnalytics;
