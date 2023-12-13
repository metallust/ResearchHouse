import React from "react";

function StudentTodo() {
	const card = {
		width: "80%",
		height: "25vh",
		backgroundColor: "#E1F8FF",
		border: "2px solid #E1F8FF",
		borderRadius: "10px",
		overflowY: "scroll",
		padding: "0 10px ",
		margin: "10px 0 0 0",
		boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
	};
	const title = {
		fontSize: "20px",
		fontWeight: "bold",
		color: "black",
		padding: "10px 0 0 0",
		// textAlign: "center",
	};
	const body = {
		marginTop: "20px",
		// fontWeight: "bold",
		color: "black",
		textAlign: "center",
		listStyle: "none",
	};

	return (
		<div style={card}>
			<div style={title}>TODO List</div>
			<div style={body}>
				<ul className='list-group'>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1 <input type='checkbox' name='a' id='td1' value='Todo 1' />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default StudentTodo;
