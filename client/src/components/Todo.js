import React from "react";

function Todo() {
	const card = {
		width: "500px",
		height: "500px",
		backgroundColor: "grey",
		border: "2px solid #fff",
		borderRadius: "10px",
	};
	const title = {
		fontSize: "20px",
		fontWeight: "bold",
		color: "#fff",
		textAlign: "center",
	};
	const body = {
		marginTop: "20px",
		fontSize: "20px",
		fontWeight: "bold",
		color: "#fff",
		textAlign: "center",
		listStyle: "none",
	};

	return (
		<div style={card}>
			<div style={title}>Guide Advice</div>
			<div style={body}>
				<ul className='list-group'>
					<li>First advice</li>
					<li>First advice</li>
					<li>First advice</li>
					<li>First advice</li>
					<li>First advice</li>
				</ul>
			</div>
		</div>
	);
}

export default Todo;
