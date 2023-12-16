import React from "react";

function StudentTodo() {
	const card = {
		width: "90%",
		height: "25vh",
		backgroundColor: "#E1F8FF",
		borderRadius: "10px",
		overflowY: "scroll",
		padding: "0 10px ",
		color: "#004257",
		margin: "2rem 0 0 0",
		fontFamily: "Roboto, sans-serif",
		boxShadow:
			"0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
	};
	const title = {
		fontFamily: "Roboto, sans-serif",
		color: "#004257",
		fontSize: "20px",
		fontWeight: "bold",
		textAlign: "center",
	};
	const body = {
		fontFamily: "Roboto, sans-serif",
		color: "#004257",
		marginTop: "20px",
		// fontWeight: "bold",
		textAlign: "center",
		listStyle: "none",
	};

	return (
		<div style={card}>
			<div style={title}>TODO List</div>
			<div style={body}>
				<ul className='list-group'>
					<li className='d-flex justify-content-between'>
						1.{"Max 28 characters"}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
					<li className='d-flex justify-content-between'>
						Todo 1{" "}
						<input
							type='checkbox'
							name='a'
							id='td1'
							value='Todo 1'
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default StudentTodo;
