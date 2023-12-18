import React from "react";
import "./Index.css";

function Node({ position, name, due, removenode }) {
	const handleClick = () => {
		removenode(position);
	};

	return (
		<div style={{ position: "relative" }}>
			<div className='node' onClick={handleClick}>
				-
			</div>
			<div className='fw-semibold' style={{ position: "absolute", fontSize: "16px", transform: "translate(50%, 0%)" }}>
				{name}
			</div>
		</div>
	);
}

export default Node;
