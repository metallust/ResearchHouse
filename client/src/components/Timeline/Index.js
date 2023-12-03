import React from "react";
import { Event, ActiveEvent, CompletedEvent } from "./Event";
import "./Index.css";

function Index() {
	const lineStyle = {
		width: "800px", // Adjust line width as needed
		height: "6px", // Adjust line height as needed
		position: "absolute",
		top: `50%`,
		left: `50%`,
		transform: "translate(-50%, -50%)",
		display: "flex",
		justifyContent: "space-around",
		backgroundColor: "red",
		background: "linear-gradient(to right, blue 30%, green 0%)",
		transition: "backgroundColor 1s linear", // Transition the width property over 1 second
	};
	return (
		<>
			<div style={lineStyle} className="gradient-box">
				<CompletedEvent width={50} />
				<ActiveEvent width={50} />
				<Event width={100} />
				<Event width={50} />
				<Event width={50} />
			</div>
		</>
	);
}

export default Index;
