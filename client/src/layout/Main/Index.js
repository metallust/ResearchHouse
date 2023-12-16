import React from "react";
import "./Index.css";

function Index(props) {
	const sidebaritems = props.sidebaritems;
	const contentitems = props.contentitems;
	const rightbaritems = props.rightbaritems;
	return (
		<div class='main'>
			<div class='sidebar'>
				{sidebaritems.map((item) => {
					return <div>{item}</div>;
				})}
			</div>
			<div class='content'>
				{contentitems.map((item) => {
					return <div>{item}</div>;
				})}
			</div>
			<div class='rightbar'>
				{rightbaritems.map((item) => {
					return <div>{item}</div>;
				})}
			</div>
		</div>
	);
}

export default Index;
