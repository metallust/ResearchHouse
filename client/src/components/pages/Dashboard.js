import React from "react";
import Timeline from "../Timeline/Index";
const Dashboard = () => {
	return (
		<div className="text-center mt-5">
			<h1 style={{ fontSize: "50px", marginTop: "100px" }}>Dissertation Progress</h1>
			<span style={{ fontSize: "20px" }}>Timeline</span>
			<Timeline
				n={5}
				complete={3}
				customwidth={{ 2: 60 }}
				descriptions={[
					{
						title: "Synopsis",
						start: "Done on 09 Aug 2021",
						due: "Due on 05 Sep 2021",
					},
					{
						title: "Research",
						start: "Done on 09 Aug 2021",
						due: "Due on 05 Sep 2021",
					},
					{
						title: "Implementation",
						start: "Done on 09 Aug 2021",
						due: "Due on 05 Sep 2021",
					},
					{
						title: "Reports",
						start: "Done on 09 Aug 2021",
						due: "Due on 05 Sep 2021",
					},
					{
						title: "Publication",
						start: "Done on 09 Aug 2021",
						due: "Due on 05 Sep 2021",
					},
				]}
			/>
		</div>
	);
};

export default Dashboard;
