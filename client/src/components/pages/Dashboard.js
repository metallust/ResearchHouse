import React from "react";
import Timeline from "../Timeline/Index";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className='text-center'>
			<Link to='/'>Back</Link>
			<div className='container p-5'>
				<span className='fs-1'> Dissertation Progress</span>
				<p className='fs-3'>Timeline</p>
			</div>
			<div className='p-5'>
				<Timeline
					n={5}
					complete={2}
					recentcompleted={3}
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
		</div>
	);
};

export default Dashboard;
