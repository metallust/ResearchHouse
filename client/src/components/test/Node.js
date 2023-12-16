import React from "react";
import "./Node.css";

const height = 16;

const Point = ({ desc, width, height, padding, fill, bcolor, child }) => {
	const circleStyle = {
		width: `${width}px`,
		height: `${height}px`,
		borderRadius: `${height / 2}px`,
		border: `${bcolor} solid ${padding}`,
		backgroundColor: `${fill}`,
		position: "relative",
		transform: "translate(-50%, -35%)",
	};
	return (
		<>
			<div style={circleStyle}>{child}</div>
		</>
	);
};

const Node = ({ width, type, desc, descy }) => {
	const CompletedEvent = () => {
		const padding = "0px";
		const bcolor = "#e1f8ff";
		const fill = "#004256";
		const svgfill = "white";

		const svgStyle = {
			width: "80%", // Adjust as needed
			height: "70%", // Adjust as needed
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-45%, -50%)",
			padding: "3px",
		};

		const child = <></>;
		return <Point desc={desc} descy={descy} width={width} height={height} padding={padding} fill={fill} bcolor={bcolor} child={child} />;
	};

	const ActiveEvent = () => {
		const padding = "5px";
		const bcolor = "#004256";
		const fill = "white";
		return <Point desc={desc} descy={descy} width={width} height={height} padding={padding} fill={fill} bcolor={bcolor} />;
	};

	const Event = () => {
		const padding = "0px";
		const bcolor = "grey";
		const fill = "#e1f8ff";
		return <Point desc={desc} descy={descy} width={width} height={height} padding={padding} fill={fill} bcolor={bcolor} />;
	};

	if (type === "none") return <Event />;
	if (type === "active") return <ActiveEvent />;
	if (type === "complete") return <CompletedEvent />;
};

export default Node;
