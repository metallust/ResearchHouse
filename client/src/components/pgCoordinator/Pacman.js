import React from "react";
import { Chart } from "react-google-charts";

export const data = [
	["Following Deadlines", "Students (in count)"],
	["Trailing", 13],
	["Within Timeline", 83],
];

export const options = {
	title: "Deadlines Maintained",
	legend: "none",
	pieSliceText: "label",
	slices: {
		4: { offset: 0.2 },
		12: { offset: 0.3 },
		14: { offset: 0.4 },
		15: { offset: 0.5 },
	},
};

function Pacman() {
	return (
		<Chart
			chartType='PieChart'
			data={data}
			options={options}
			width={"100%"}
			height={"100px"}
		/>
	);
}

export default Pacman;
