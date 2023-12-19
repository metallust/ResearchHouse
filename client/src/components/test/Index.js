import React, { useState } from "react";
import "./Index.css";
import StudentTodo from "./StudentTodo";
import Announcements from "./Announcements";
import Timeline from "./Timeline";
import File from "./File";
import Conversation from "./Conversation/Index";
import Rightbar from "./Rightbar";

function Files() {
	return (
		<div className='my-4'>
			<File />
			<File />
			<File />
		</div>
	);
}

function Index(props) {
	const name = "Basit";
	const section = "section";
	const [tab, setTab] = useState(0);
	return (
		<div className='main'>
			<div className='sidebar'>
				<div className='h2 my-3 py-4 fw-bold d-flex justify-content-center position' style={{ color: "#004256" }}>
					ResearchHouse
				</div>
				<div
					className='d-flex flex-column justify-content-center'
					style={{
						backgroundColor: "#E1F8FF",
						padding: "4px 10px",
						margin: "10px 10px 10px 10px",
						borderRadius: "6px",
						boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
					}}
				>
					<h6 className='text-center fw-bold'>Implement</h6>
					<p className='fw-semibold'>Deadline : 17 Dec 2023 (7 days left)</p>
				</div>
				<StudentTodo />
				<Announcements />
			</div>
			<div className='content'>
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

				<div className='px-4'>
					<div className='flex-grow-1 d-flex justify-content-between'>
						<h3 className='fw-bold'>Submission : </h3>
						<button type='button' class='btn btn-primary' style={{ background: "#004256" }}>
							+ New Submission
						</button>
					</div>

					<ul className='nav nav-tabs'>
						<li className='nav-item'>
							<a
								className={`nav-link ${tab === 0 ? "active" : ""}`}
								aria-current='page'
								onClick={() => {
									setTab(0);
								}}
								href='#'
							>
								Files
							</a>
						</li>
						<li className='nav-item'>
							<a
								className={`nav-link ${tab === 1 ? "active" : ""}`}
								aria-current='page'
								onClick={() => {
									setTab(1);
								}}
								href='#'
							>
								Conversation
							</a>
						</li>
					</ul>

					{tab === 0 ? <Files /> : <Conversation />}
				</div>
			</div>
			<div className='rightbar'>
				<Rightbar />
			</div>
		</div>
	);
}

export default Index;
