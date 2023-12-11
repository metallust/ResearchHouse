import React from "react";
import "./Todo.css";

function Todo() {
	const card = {
		width: "400px",
		height: "500px",
		overflow: "hidden",
		position: "relative",
		border: "1px solid grey",
		borderRadius: "20px",
	};
	const title = {
		color: "#ff21fb",
		textAlign: "center",
		fontSize: "30px",
		fontWeight: "bold",
		top: "0",
		position: "absolute",
		width: "100%",
		height: "100px",
		padding: "15px",
		background: "linear-gradient(to top, transparent 0%, black 40%)",
	};
	const body = {
		height: "100%",
		overflowY: "scroll",
		padding: "15px",
	};
	const listitem = {
		padding: "8px",
		color: "white",
		fontSize: "35px",
	};

	const [todos, setTodos] = React.useState([
		{ name: "First advice", status: "todo" },
		{ name: "Second advice", status: "todo" },
		{ name: "Third advice", status: "todo" },
		{ name: "Fourth advice", status: "todo" },
		{ name: "Fifth advice", status: "todo" },
		{ name: "Sixth advice", status: "todo" },
		{ name: "Seventh advice", status: "todo" },
		{ name: "Eighth advice", status: "todo" },
		{ name: "Ninth advice", status: "todo" },
		{ name: "Tenth advice", status: "todo" },
		{ name: "Eleventh advice", status: "todo" },
		{ name: "Twelfth advice", status: "todo" },
		{ name: "Thirteenth advice", status: "todo" },
		{ name: "Fourteenth advice", status: "todo" },
	]);

	const changeRow = (index) => {
		// the index of the todo if status = todo toggle it to complete and if todo toggle it to todo
	};
	return (
		<div className='todo' style={card}>
			<div style={title}>Guide Advice</div>
			<div style={body}>
				{todos.map((todo, i) => (
					<div
						className='list-item-good'
						style={listitem}
						key={todo.name}
						onClick={() => {
							changeRow(i);
						}}
					>
						{todo.name}
					</div>
				))}
			</div>
			<div
				style={{
					position: "absolute",
					bottom: "0",
					width: "100%",
					height: "60px",
					background: "linear-gradient(to top, black 30%, transparent)",
				}}
			></div>
		</div>
	);
}

export default Todo;
