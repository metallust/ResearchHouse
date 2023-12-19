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
					<div className='d-flex' style={{ marginRight: "10px" }}>
						<p style={{ marginRight: "5px" }}>Edit Timeline</p>
						<buttton>
							<svg
								width='26'
								height='26'
								viewBox='0 0 26 26'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect
									width='26'
									height='26'
									rx='8'
									fill='#004257'
								/>
								<path
									d='M17.0833 13C17.0833 12.8674 17.1316 12.7402 17.2176 12.6464C17.3035 12.5527 17.4201 12.5 17.5417 12.5C17.6632 12.5 17.7798 12.5527 17.8658 12.6464C17.9517 12.7402 18 12.8674 18 13V18.5C18 18.6326 17.9517 18.7598 17.8658 18.8536C17.7798 18.9473 17.6632 19 17.5417 19H7.45833C7.33678 19 7.2202 18.9473 7.13424 18.8536C7.04829 18.7598 7 18.6326 7 18.5V7.5C7 7.36739 7.04829 7.24021 7.13424 7.14645C7.2202 7.05268 7.33678 7 7.45833 7H12.5C12.6216 7 12.7381 7.05268 12.8241 7.14645C12.91 7.24021 12.9583 7.36739 12.9583 7.5C12.9583 7.63261 12.91 7.75979 12.8241 7.85355C12.7381 7.94732 12.6216 8 12.5 8H7.91667V18H17.0833V13Z'
									fill='white'
								/>
								<path
									d='M12.0718 13.0612L12.8838 12.9596L17.8715 8.59595C17.9185 8.55622 17.956 8.50871 17.9818 8.45618C18.0075 8.40364 18.0211 8.34714 18.0217 8.28996C18.0223 8.23279 18.0098 8.17609 17.9851 8.12317C17.9603 8.07025 17.9238 8.02217 17.8776 7.98174C17.8314 7.94131 17.7764 7.90934 17.716 7.88769C17.6555 7.86604 17.5907 7.85515 17.5254 7.85564C17.46 7.85614 17.3954 7.86802 17.3354 7.89058C17.2754 7.91315 17.2211 7.94596 17.1757 7.98708L12.187 12.3507L12.0708 13.0612H12.0718ZM18.5673 7.37736C18.7045 7.49732 18.8133 7.63976 18.8875 7.79655C18.9618 7.95333 19 8.12137 19 8.29108C19 8.46079 18.9618 8.62884 18.8875 8.78562C18.8133 8.9424 18.7045 9.08484 18.5673 9.20481L13.4644 13.6701C13.3892 13.7362 13.2914 13.7791 13.1859 13.7924L11.562 13.9956C11.4864 14.0051 11.4092 13.9991 11.3366 13.978C11.2641 13.9568 11.1982 13.9212 11.1441 13.8739C11.0901 13.8266 11.0493 13.7689 11.0252 13.7054C11.001 13.6419 10.9941 13.5744 11.005 13.5082L11.2373 12.0872C11.2522 11.995 11.3009 11.9095 11.376 11.8435L16.4799 7.37822C16.7567 7.13605 17.1321 7 17.5236 7C17.915 7 18.2904 7.13605 18.5673 7.37822V7.37736Z'
									fill='white'
								/>
							</svg>
						</buttton>
					</div>
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
				<div className='d-flex'>
					<input
						type='button'
						id='button'
						name='button'
						value='Add Students'
						// onClick={handleSubmit}
						className='form-control-login btn btn-success btn-lg'
						style={btnstyle}
					/>
					<input
						type='button'
						id='button'
						name='button'
						value='Add Guides'
						// onClick={handleSubmit}
						className='form-control-login btn btn-success btn-lg'
						style={btnstyle}
					/>
				</div>
				<GuideAnalytics />
				<Outlet />
			</div>
			<div style={rightbar}>
				<GuideRightbar />
			</div>
		</div>
	);
}

export default GuideDashboard;
