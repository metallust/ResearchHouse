import React, { useEffect } from "react";
// import "./style.css";
import PgCoordinatorSidebar from "./PgCoordinatorSidebar";
import Rightbar from "./Rightbar";
import AddStudent from "./AddStudent";
import { Outlet, useNavigate } from "react-router";
import AddGuides from "./AddGuides";
import AddCom from "./AddCom";

function Index(props) {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/login");
		}
	}, []);

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
	return (
		<div style={main}>
			<div style={sidebar}>
				<div className='d-flex'>
					<PgCoordinatorSidebar />
					<Outlet />
				</div>
			</div>
			<div style={content}>
				<AddCom />
				<Outlet />
			</div>
			<div style={rightbar}>
				<Rightbar />
			</div>
		</div>
	);
}

export default Index;
