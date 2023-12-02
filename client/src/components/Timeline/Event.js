import React from "react";

const Event = ({ width, height, padding, fill, bcolor, iscompleted, isActive }) => {
	const circleStyle = {
		width: `${width}px`,
		height: `${height}px`,
		borderRadius: `${height / 2}px`,
		border: `${bcolor} solid ${padding}px`,
		backgroundColor: `${fill}`,
		position: "relative",
	};

	return (
		<>
			<div style={circleStyle}></div>
		</>
	);
};

// const completed
export default Event;
