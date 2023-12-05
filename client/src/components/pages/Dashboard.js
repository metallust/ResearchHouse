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
						subtitle: (
							<>
								<p>Done on 09 Aug 2021</p>
								<p>Due on 05 Sep 2021</p>
							</>
						),
						position: 1,
					},
					{
						title: "Research",
						subtitle: (
							<>
								<p>Done on 09 Aug 2021</p>
								<p>Due on 05 Sep 2021</p>
							</>
						),
						position: -1.3,
					},
					{
						title: "Implementation",
						subtitle: (
							<>
								<p>Done on 09 Aug 2021</p>
								<p>Due on 05 Sep 2021</p>
							</>
						),
						position: 1,
					},
					{
						title: "Reports",
						subtitle: (
							<>
								<p>Done on 09 Aug 2021</p>
								<p>Due on 05 Sep 2021</p>
							</>
						),
						position: -1.3,
					},
					{
						title: "Publication",
						subtitle: (
							<>
								<p>Done on 09 Aug 2021</p>
								<p>Due on 05 Sep 2021</p>
							</>
						),
						position: 1,
					},
				]}
			/>
		</div>
	);
};

export default Dashboard;
