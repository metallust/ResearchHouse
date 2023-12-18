import React from "react";

function Rightbar() {
	const buttonstyle = {
		background: "none",
		border: "none",
	};
	return (
		<div>
			<div style={{}}>
				<div
					className='justify-content-evenly '
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
						marginTop: "20px",
					}}
				></div>
			</div>
		</div>
	);
}

export default Rightbar;
