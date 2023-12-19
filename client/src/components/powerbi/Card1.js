import React from "react";

function Card1() {
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
	);
}

export default Card1;
