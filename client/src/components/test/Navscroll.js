import React, { useEffect, useState } from "react";

const NavBar = () => {
	const [scrollPos, setScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPos(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const maxScaleValue = 1.5; // Adjust the maximum scale factor as needed
	const scrollThreshold = 200; // Adjust the scroll threshold for stopping scaling

	const scaleValue = Math.min(maxScaleValue, 1 - scrollPos / 200);
	const isScalingEnabled = scrollPos < scrollThreshold;

	const navBarStyle = {
		transform: `scale(${isScalingEnabled ? scaleValue : maxScaleValue})`,
		width: "500px",
		height: "200px",
		backgroundColor: "red", // Adjust the background color as needed
		zIndex: "999",
		transition: "transform 0.3s ease-in-out",
		position: "fixed",
	};

	return (
		<div style={{ height: "100vh", position: "relative" }}>
			<div style={navBarStyle}>Navigation Bar</div>;
		</div>
	);
};

const App = () => {
	return (
		<div style={{ position: "relative", height: "200vh", display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center" }}>
			<NavBar />
			<div style={{ height: "100vh", width: "100%", backgroundColor: "lightblue" }}>Main Content</div>
		</div>
	);
};

export default App;
