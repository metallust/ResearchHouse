import React from "react";
import { Chart } from "react-google-charts";

export const data = [
	[
		"Done Within Deadline",
		"Not Done Within Deadline",
		{ role: "style" },
		{
			sourceColumn: 0,
			role: "annotation",
			type: "string",
			calc: "stringify",
		},
	],
	["Done Within", 6, "#b87333", null],
	["Not Done Within Deadline", 4, "silver", null],
];

export const options = {
	// title: "Density of Precious Metals, in g/cm^3",
	width: 120,
	height: 130,
	bar: { groupWidth: "95%" },
	legend: { position: "none" },
};

function Pacman() {
	return (
		<Chart
			chartType='BarChart'
			width='40px'
			height='40px'
			data={data}
			options={options}
		/>
	);
}

export default Pacman;
