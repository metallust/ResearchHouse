// HorizontalTimeline.js

import React from "react";
import "./Index.css";

const HorizontalTimeline = ({ events }) => {
	return (
		<div className="timeline">
			{events.map((event, index) => (
				<div key={index} className="timeline-item">
					<div className="timeline-content">
						<h3>{event.title}</h3>
						<p>{event.description}</p>
						{/* Add more content as needed */}
					</div>
				</div>
			))}
		</div>
	);
};

export default HorizontalTimeline;
