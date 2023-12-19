import React from "react";
import { useState } from "react";

// import { Doughnut } from "react-chartjs-2";

const GuideAnalytics = () => {
	const [tab, setTab] = useState(0);
	const handleSave = () => {};

	const containerstyle = {
		backgroundColor: "#E1F8FF",
		width: "90%",
		height: "fit-content",
		marginRight: "20px",
		marginBottom: "20px",
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
	};
	const cardheadername = {
		fontSize: "13px",
		display: "flex",
		justifyContent: "start",
	};

	return (
		<>
			<div
				id='AddStudentModal'
				style={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div
					style={{
						fontSize: "22px",
						fontWeight: "700",
						color: "#004257",
						fontFamily: "Roboto, sans-serif",
						marginBottom: "5px",
						marginTop: "20px",
					}}
				>
					At a Glance
				</div>
				<div className='d-flex'>
					<div className='container py-2' style={containerstyle}>
						<div style={cardheadername}>
							<p>Students allocated :</p>
						</div>
						<div className='d-flex'>
							<div
								style={{
									fontSize: "64px",
								}}
							>
								6
							</div>
							<div
								style={{
									fontSize: "10px",
									marginLeft: "60px",
									marginTop: "30px",
								}}
							>
								<div>1 Less than Maximum</div>

								<div> (Per Academic Year)</div>
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
							<div> 7 Students per Guide</div>
						</div>
					</div>
					<div className='container py-2' style={containerstyle}>
						<div style={cardheadername}>
							<p>Submissions in Deadline : Average </p>
						</div>
					</div>
					<div className='container py-2' style={containerstyle}>
						<div style={cardheadername}>
							<p>Chosen Domains</p>
						</div>
						<div className='d-flex'>
							<div>6 </div>
							<div>1 Less than Maximum Recommended</div>
						</div>

						<div>Maximum : 7 Students per Guide</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GuideAnalytics;
