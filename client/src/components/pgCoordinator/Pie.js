import React from "react";
import { Chart } from "react-google-charts";

export const engineeringDomains = [
	["Domain", "Students"],
	["Computer Vision", 15],
	["Robotics", 10],
	["Renewable Energy", 8],
	["Structural Engineering", 12],
	["Artificial Intelligence", 20],
];

export const options = {
	title: "Domain Statistics",
	is3D: true,
};

export function Pie() {
	return (
		<Chart
			chartType='PieChart'
			data={engineeringDomains}
			options={options}
			width={"100%"}
			height={"400px"}
		/>
	);
}
