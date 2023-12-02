import React from "react";
import { Event, ActiveEvent, CompletedEvent } from "./Event";

function Index() {
	const lineStyle = {
		width: "800px", // Adjust line width as needed
		height: "2px", // Adjust line height as needed
		backgroundColor: "black", // Adjust line color as needed
		position: "absolute",
		top: `50%`,
		left: `50%`,
		transform: "translate(-50%, -50%)",
		display: "flex",
		justifyContent: "space-around",
	};
	return (
		<div style={lineStyle}>
			<CompletedEvent width={50} />
			<ActiveEvent width={50} />
			<Event width={100} />
			<Event width={50} />
			<Event width={50} />
		</div>
	);
}

export default Index;
