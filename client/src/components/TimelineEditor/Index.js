import React, { useEffect, useRef, useState } from "react";
import AddNode from "./AddNode";
import Node from "./Node";

function Index() {
	const [timeline, setTimeline] = useState([]);
	const [name, setName] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [position, setPosition] = useState(0);

	const ref = useRef(null);
	function addNode(position) {
		ref.current.click();
		setPosition(position);
	}
	function handleCreate() {
		console.log(position);
		const newtimeline = timeline.slice(0, position).concat({ name, dueDate }, timeline.slice(position));
		console.log(newtimeline);
		setTimeline(newtimeline);
	}

	function removeNode(position) {
		console.log("remove ", position);
		const newtimeline = timeline.slice(0, position).concat(timeline.slice(position + 1));
		console.log(newtimeline);
		setTimeline(newtimeline);
	}

	const linestyle = {
		backgroundColor: "orange",
		// padding: "0px 20px",
		height: "5px",
		position: "flex",
		alignItems: "center",
	};

	return (
		<div className='d-flex justify-content-center align-items-center pt-5'>
			<div className='d-flex gap-5' style={linestyle}>
				<AddNode addNode={addNode} position={0} />
				{timeline.flatMap((node, index) => {
					return [<Node name={node.name} due={node.due} position={index} removenode={removeNode} />, <AddNode addNode={addNode} position={index + 1} />];
				})}
			</div>
			<button type='button' ref={ref} className='btn btn-primary d-none' data-bs-toggle='modal' data-bs-target='#exampleModal'>
				Launch demo modal
			</button>

			<div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel'>
								Add Event
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<div className='mb-3'>
								<div className='mb-3'>
									<label htmlFor='name' className='form-label'>
										Name
									</label>
									<input
										className='form-control'
										id='name'
										placeholder='Implementation'
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
									/>
								</div>
								<div className='mb-3'>
									<label htmlFor='due' className='form-label'>
										Due Date
									</label>
									<input
										type='date'
										className='form-control'
										id='due'
										placeholder='Implementation'
										value={dueDate}
										onChange={(e) => {
											setDueDate(e.target.value);
										}}
									/>
								</div>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
							<button
								type='button'
								className='btn btn-primary'
								data-bs-dismiss='modal'
								onClick={() => {
									handleCreate();
								}}
							>
								Create
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
