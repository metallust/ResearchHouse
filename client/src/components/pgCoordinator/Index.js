import React from "react";
import "./Index.css";
import PgCoordinatorSidebar from "./PgCoordinatorSidebar";
import Rightbar from "./Rightbar";
import AddStudent from "./AddStudent";
import { Outlet } from "react-router";

function Index(props) {
	return (
		<div className='main'>
			<div className='sidebar'>
				<div className='d-flex'>
					<PgCoordinatorSidebar />
					<Outlet />
				</div>
			</div>
			<div className='content'>
				<AddStudent />
				<Outlet />
			</div>
			<div className='rightbar'>
				<Rightbar />
				<Rightbar />
			</div>
		</div>
	);
}

export default Index;
