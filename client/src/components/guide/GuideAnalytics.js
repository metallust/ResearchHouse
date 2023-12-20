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
		padding: "5px 5px 5px 5px",
		margin: "10px 10px 10px 10px",
		boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
		position: "relative",
		overflow: "hidden",
	};

	const cardheadername = {
		fontSize: "13px",
		fontWeight: "500",
		display: "flex",
		justifyContent: "between",
	};

	const bodyname = {
		fontSize: "13px",
		fontWeight: "500",
		display: "flex",
		justifyContent: "between",
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
					<div className='container' style={containerstyle}>
						<div style={cardheadername}>
							<p>Allocated Students : </p>
						</div>

						<div
							style={{
								fontSize: "80px",
								marginLeft: "10px",
								marginTop: "0px",
							}}
						>
							6
						</div>

						<div style={bodyname}>
							<div>Recommended Maximum:</div>
							<div>7 Students per Guide</div>
						</div>
					</div>
					<div
						className='container d-flex felx-column py-2 '
						style={containerstyle}
					>
						<div style={cardheadername}>
							<div>Submissions in Deadline : Average</div>
							<div>
								<Pacman />
							</div>
						</div>
					</div>

					<div className='container py-2 ' style={containerstyle}>
						<div style={cardheadername}>Chosen Domains</div>
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
