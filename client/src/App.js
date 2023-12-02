// App.js

import React from "react";
import Navbar from "./components/Navbar";
import HorizontalTimeline from "./components/HorizontalTimeline/Index";

const App = () => {
	const timelineEvents = [
		{ title: "Event 1", description: "Description for Event 1" },
		{ title: "Event 2", description: "Description for Event 2" },
		{ title: "Event 3", description: "Description for Event 2" },
		{ title: "Event 4", description: "Description for Event 2" },
		// Add more events as needed
	];

	return (
		<div className="m-2">
			<Navbar />
			<HorizontalTimeline events={timelineEvents} />
		</div>
	);
};
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/Loginpage";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<LandingPage />
			<LoginPage />
		</div>
	);
}

export default App;
