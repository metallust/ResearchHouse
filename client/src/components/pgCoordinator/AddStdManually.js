import React, { useState } from "react";
import Table from "../Table";

const AddStdManually = () => {
	const dropdowns = [0, 1];
	const branch = ["a", "b", "c", "d"]; // fetch all branchs set by pg coordinator
	const batch = ["2023-24", "2024-25"]; // fetch all branchs set by pg coordinator
	var [tempStudent, setTempStudent] = useState([
		[1, 2, 3, 4],
		[1, 2, 3, 4],
	]);
	const header = ["#", "PRN", "Email Address", "Branch", "Batch"];

	const handleAddStudent = (e) => {
		e.preventDefault();
		let prn = document.getElementById("prn");
		let studentemail = document.getElementById("studentemail");
		let AddStudentBranch = document.getElementById("AddStudentBranch");
		let AddStudentBatch = document.getElementById("AddStudentBatch");
		setTempStudent((prevTempStudent) => [
			...prevTempStudent,
			[
				prn.value,
				studentemail.value,
				AddStudentBranch.value,
				AddStudentBatch.value,
			],
		]);

		console.log(tempStudent);
	};

	return (
		<div>
			<form className='' onSubmit={handleAddStudent} method='post'>
				<div className='mb-3 d-flex'>
					<label
						htmlFor='prn'
						className='form-label me-2'
						style={{ width: "20%" }}
					>
						PRN Number
					</label>
					<input
						id='prn'
						className='form-control'
						required
						name='prn'
					/>
				</div>
				<div className='mb-3 d-flex'>
					<label
						htmlFor='studentemail'
						className='form-label me-2'
						style={{ width: "20%" }}
					>
						Email:
					</label>
					<input
						id='studentemail'
						type='email'
						className='form-control'
						name='password'
					/>
				</div>

				<div className='mb-3 d-flex'>
					<label
						htmlFor={`AddStudentBranch`}
						className='form-label me-2'
						style={{
							width: "20%",
						}}
					>
						Branch:
					</label>
					<select className='form-select' id={`AddStudentBranch`}>
						{branch.map((opt) => {
							return <option value={opt}>{opt}</option>;
						})}
					</select>
				</div>
				<div className='mb-3 d-flex'>
					<label
						htmlFor={`AddStudentBatch`}
						className='form-label me-2'
						style={{
							width: "20%",
						}}
					>
						Batch:
					</label>
					<select className='form-select' id={`AddStudentBatch`}>
						{batch.map((opt) => {
							return <option value={opt}>{opt}</option>;
						})}
					</select>
				</div>

				<button type='submit' className='btn btn-secondary'>
					Add Student
				</button>
			</form>
			<div className='my-4'>
				<Table header={header} tempStudent={tempStudent} />
			</div>
		</div>
	);
};

export default AddStdManually;
