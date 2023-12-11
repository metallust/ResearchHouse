import React, { useState } from "react";
import { Link } from "react-router-dom";

const Addstudent = () => {
	const [studentDetails, setstudentDetails] = useState({
		itemName: "",
		quantity: 0,
		minQuantity: 0,
	});

	const [itemList, setItemList] = useState([]);
	const [isSubmitDisabled, setSubmitDisabled] = useState(true);

	const handleAddItem = () => {
		setItemList((prevList) => [...prevList, studentDetails]);
		setstudentDetails({
			studentName: "",
			prn: "",
			email: "",
		});
		setSubmitDisabled(false);
	};

	const handleNewStudentRequest = () => {
		// Add logic to handle the submission of all items
		console.log("Student Details submitted:", itemList);
		// You can send this data to your backend or perform further actions
	};

	const handleChange = (event) => {
		const { id, value } = event.target;
		setstudentDetails((prevDetails) => ({
			...prevDetails,
			[id]: value,
		}));
	};

	return (
		<div className='container'>
			<form className='py-2 d-flex flex-column'>
				<h4 className='my-1'>Add Student Details :</h4>

				<div className='d-flex justify-content-between flex-wrap mb-3'>
					<div className='d-flex me-3 mb-3'>
						<label
							htmlFor='studentName'
							className='form-label align-self-center h6'
						>
							Name :
						</label>
						<input
							type='text'
							className='form-control ms-4'
							id='studentName'
							value={studentDetails.studentName}
							onChange={handleChange}
						/>
					</div>
					<div className='d-flex me-3 mb-3'>
						<label
							htmlFor='prn'
							className='form-label align-self-center h6'
						>
							PRN :
						</label>
						<input
							type='text'
							className='form-control ms-4'
							id='prn'
							value={studentDetails.prn}
							onChange={handleChange}
						/>
					</div>
					<div className='d-flex me-3 mb-3'>
						<label
							htmlFor='email'
							className='form-label align-self-center h6'
						>
							Email :
						</label>
						<input
							type='text'
							className='form-control ms-4'
							id='email'
							value={studentDetails.email}
							onChange={handleChange}
						/>
					</div>
				</div>

				<button
					className='btn btn-outline-success me-2 align-self-center'
					style={{ width: "10rem" }}
					onClick={handleAddItem}
					type='button'
				>
					Add
				</button>
			</form>

			<div className='mt-4'>
				<h5>Added Student Details:</h5>
				<table className='table'>
					<thead>
						<tr>
							<th>Student Name</th>
							<th>PRN</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{itemList.map((item, index) => (
							<tr key={index}>
								<td>{item.studentName}</td>
								<td>{item.prn}</td>
								<td>{item.email}</td>
							</tr>
						))}
					</tbody>
				</table>

				<button
					className='btn btn-primary me-2'
					onClick={handleNewStudentRequest}
					type='button'
					disabled={isSubmitDisabled}
				>
					Submit
				</button>
				<Link to={""} className='btn btn-secondary' role='button'>
					Cancel
				</Link>
			</div>
		</div>
	);
};

export default Addstudent;
