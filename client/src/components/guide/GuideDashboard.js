import React from "react";
// import "./style.css";
// import PgCoordinatorSidebar from "./PgCoordinatorSidebar";
// import Rightbar from "./Rightbar";
// import AddStudent from "./AddStudent";
import Timeline from "../test/Timeline";

import { Outlet } from "react-router";
import GuideSidebar from "./GuideSidebar";
// import AddGuides from "../pgCoordinator/AddGuides";
import GuideRightbar from "./GuideRightbar";
import GuideAnalytics from "./GuideAnalytics";

function GuideDashboard(props) {
	const sidebar = {
		display: "block",
		/* background: rgba(0, 0, 0, 0.2), */
		maxWidth: "280px",
		flexGrow: "4",
		overflow: "hidden",
		overflowY: "scroll",
	};
	const main = {
		display: "flex",
		height: "100vh",
	};
	const content = {
		display: "block",
		/* background: rgba(0, 0, 0, 0.4), */
		flexGrow: "3",
		overflow: "hidden",
		overflowY: "scroll",
	};
	const rightbar = {
		background: "rgba(255, 255, 255, 0.2)",
		minWidth: "140px",
		maxWidth: "200px",
		flexGrow: "1",
		overflow: "hidden",
		overflowY: "scroll",
	};
	const btnstyle = {
		width: "fit-content",
		height: "40px",
		padding: "10px",
		backgroundColor: "#004257",
		borderRadius: "10px",
		border: "none",
		color: "#fff",
		fontSize: "16px",
		fontWeight: "400",
		boxShadow:
			"0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
		fontFamily: "Roboto, sans-serif",
		marginBottom: "20px",
		marginRight: "10px",
	};

	return (
		<div style={main}>
			<div style={sidebar}>
				<div className='d-flex'>
					<GuideSidebar />
					<Outlet />
				</div>
			</div>
			{/* <div style={content}>
				<AddGuides />
				<Outlet />
			</div> */}
			<div style={content}>
				<div
					className='d-flex justify-content-between'
					style={{
						marginTop: "10px",
					}}
				>
					<p>Computer Science 2023-24</p>
				</div>
				<Timeline
					n={5}
					complete={3}
					descriptions={[
						{
							title: "Synopsis",
							position: 1,
						},
						{
							title: "Research",
							position: 1,
						},
						{
							title: "Implementation",
							position: 1,
						},
						{
							title: "Reports",
							position: 1,
						},
						{
							title: "Publication",
							position: 1,
						},
					]}
				/>

				{/* <GuideSubmissionView /> */}
				<Outlet />
			</div>
			<div style={rightbar}>
				<GuideRightbar />
			</div>
		</div>
	);
}

export default GuideDashboard;
