import React from "react";
import { Doughnut } from "react-chartjs-2";

const SemicircularPieChart = () => {
	// Dummy data for the doughnut chart
	const data = {
		labels: ["Red", "Blue"],
		datasets: [
			{
				data: [30, 70],
				backgroundColor: ["#FF6384", "#36A2EB"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB"],
			},
		],
	};

	// Doughnut chart options
	const options = {
		circumference: Math.PI,
		rotation: -Math.PI,
		cutoutPercentage: 80, // Adjust cutout to control the size of the semicircle
		legend: {
			display: true,
			position: "bottom",
		},
	};

	return (
		<div>
			<h2>Semicircular Chart</h2>
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default SemicircularPieChart;
