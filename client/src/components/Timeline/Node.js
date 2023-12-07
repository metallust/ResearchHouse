import React from "react";
import "./Node.css";

const height = 30;
const Point = ({ desc, descy = -1, width, height, padding, fill, bcolor, child }) => {
	const circleStyle = {
		width: `${width}px`,
		height: `${height}px`,
		borderRadius: `${height / 2}px`,
		border: `${bcolor} solid ${padding}`,
		backgroundColor: `${fill}`,
		position: "relative",
		transform: "translate(-50%, -40%)",
	};
	return (
		<>
			<div style={circleStyle}>
				{child}
				<div
					className='timeline-card'
					style={{
						transform: `translate(-50%, ${-50 + desc.position * 50}%) scale(0.9)`,
					}}
				>
					{desc.position > 0 ? (
						<>
							<div className='fs-4'>{desc.title}</div>
							{desc.subtitle}
						</>
					) : (
						<>
							{desc.subtitle}
							<div className='fs-4'>{desc.title}</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

const Node = ({ width, type, desc, descy }) => {
	const CompletedEvent = () => {
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
			padding: "3px",
		};

		const child = (
			<>
				<svg xmlns='http://www.w3.org/2000/svg' style={svgStyle} viewBox='0 0 512 512'>
					<path fill={svgfill} d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
				</svg>
			</>
		);
		return <Point desc={desc} descy={descy} width={width} height={height} padding={padding} fill={fill} bcolor={bcolor} child={child} />;
	};

	const ActiveEvent = () => {
		const padding = "7px";
		const bcolor = "blue";
		const fill = "white";
		return <Point desc={desc} descy={descy} width={width} height={height} padding={padding} fill={fill} bcolor={bcolor} />;
	};

	const Event = () => {
		const padding = "4px";
		const bcolor = "grey";
		const fill = "white";
		return <Point desc={desc} descy={descy} width={width} height={height} padding={padding} fill={fill} bcolor={bcolor} />;
	};

	if (type === "none") return <Event />;
	if (type === "active") return <ActiveEvent />;
	if (type === "complete") return <CompletedEvent />;
};

export default Node;
