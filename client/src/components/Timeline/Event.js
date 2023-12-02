import React from "react";

const Point = ({ width, height, padding, fill, bcolor, iscompleted, isActive, child }) => {
	const circleStyle = {
		width: `${width}px`,
		height: `${height}px`,
		borderRadius: `${height / 2}px`,
		border: `${bcolor} solid ${padding}`,
		backgroundColor: `${fill}`,
		position: "relative",
		transform: "translate(0%, -50%)",
	};

	return (
		<>
			<div style={circleStyle}>{child}</div>
		</>
	);
};

const CompletedEvent = ({ width }) => {
	const height = 50;
	const padding = "0px";
	const bcolor = "white";
	const fill = "blue";
	const svgfill = "white";

	const svgStyle = {
		width: "80%", // Adjust as needed
		height: "70%", // Adjust as needed
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-45%, -50%)",
	};

	const child = (
		<svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} viewBox="0 0 512 512">
			<path fill={svgfill} d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
		</svg>
	);
	return <Point width={width} height={height} padding={padding} fill={fill} bcolor={bcolor} child={child} />;
};

const ActiveEvent = ({ width }) => {
	const height = 50;
	const padding = "15px";
	const bcolor = "blue";
	const fill = "white";
	return <Point width={width} height={height} padding={padding} fill={fill} bcolor={bcolor} />;
};

const Event = ({ width }) => {
	const height = 50;
	const padding = "5px";
	const bcolor = "lightblue";
	const fill = "white";
	return <Point width={width} height={height} padding={padding} fill={fill} bcolor={bcolor} />;
};

export { Event, CompletedEvent, ActiveEvent };
