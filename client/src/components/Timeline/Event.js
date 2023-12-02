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
			<div style={circleStyle}>
				<svg className="" xmlns="http://www.w3.org/2000/svg" height={height - padding * 2} width={width - padding * 2} viewBox="0 0 512 512">
					<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
				</svg>
			</div>
		</>
	);
};

export default Event;
