import React from "react";

function StudentTodo() {
	const card = {
		height: "150px",
		width: "100%",
		maxWidth: "300px",
		backgroundColor: "#E1F8FF",
		borderRadius: "6px",
		border: "1px solid #004256",
		padding: "0 10px ",
		margin: "10px 10px 10px 10px",
		boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
		position: "relative",
		overflow: "hidden",
	};
	const title = {
		fontSize: "15px",
		fontWeight: "bold",
		top: "0",
		left: "0",
		position: "absolute",
		width: "100%",
		padding: "15px",
	};
	const body = {
		height: "100%",
		overflowY: "scroll",
		paddingY: "15px",
	};
	const listitem = {
		padding: "8px",
		color: "white",
		fontSize: "35px",
	};

	return (
		<div className='d-flex justify-content-center'>
			<div style={card}>
				<div style={title}>To-Do: </div>
				<div style={{ height: "40px" }}></div>
				<div style={body}>
					<ul className='list-group px-2'>
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
		</div>
	);
}

export default StudentTodo;
