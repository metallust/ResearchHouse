import React, { useContext } from "react";
import Node from "./Node";
import ThemeContext from "../../Context/ThemeContext";

const linewidth = 1000;
const defaultwidth = 30;

const calculateloadingpercentage = (n, complete, customwidth) => {
	const linewidth = 800;
	let totalwidthofevents = 0;
	for (let i = 0; i < n; i++) {
		let w = customwidth[i] === undefined ? defaultwidth : customwidth[i];
		totalwidthofevents += w;
	}
	const separation = (linewidth - totalwidthofevents) / (n - 1);
	let loadinglength = 0;
	for (let i = 0; i < complete; i++) {
		let w = customwidth[i] === undefined ? defaultwidth : customwidth[i];
		loadinglength += w + separation;
	}

	let loadingpercentage = (loadinglength / linewidth) * 100;
	return loadingpercentage;
};

const eventlist = (n, complete) => {
	let elist = [];
	for (let i = 0; i < n; i++) {
		if (i < complete) elist.push("complete");
		else if (i === complete) elist.push("active");
		else elist.push("none");
	}
	return elist;
};

function Index({ n, complete, recentcompleted, customwidth, descriptions }) {
	const light = {
		primary: "#1b2d48",
	};

	const lineStyle = {
		width: `${linewidth}px`, // Adjust line width as needed
		height: "6px", // Adjust line height as needed
		position: "relative",
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: "red",
		background: `linear-gradient(to right, ${light.primary} ${calculateloadingpercentage(n, complete, customwidth) + 1}%, grey 0%)`,
		transition: "backgroundColor 1s linear", // Transition the width property over 1 second
	};

	return (
		<div
			style={{
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "70vh",
			}}
		>
			<div style={lineStyle}>
				{eventlist(n, complete).map((type, i) => {
					let w = customwidth[i] === undefined ? defaultwidth : customwidth[i];
					return <Node key={type + i} type={type} width={w} desc={descriptions[i]} descy={i % 2 ? -1.2 : 1} />;
				})}
			</div>
		</div>
	);
}

export default Index;
