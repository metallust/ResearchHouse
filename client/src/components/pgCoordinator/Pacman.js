import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Language", "Speakers (in millions)"],
  ["Assamese", 13],
  ["Bengali", 83],
];

export const options = {
  title: "Indian Language Use",
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
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100px"}
    />
  );
}

export default Pacman;