import React, { useContext, useState } from "react";
import Table from "../Table";
import CoordinatorContext from "../../Context/Coordinator/CoordinatorContext";

const AddStdManually = () => {
	const {addStudent} = useContext(CoordinatorContext)
	const dropdowns = [0, 1];
	const branch = ["a", "b", "c", "d"]; // fetch all branchs set by pg coordinator
	const batch = ["2023-24", "2024-25"]; // fetch all branchs set by pg coordinator
	var [tempStudent, setTempStudent] = useState([]);
	const header = ["#", "PRN", "Email Address", "Branch", "Batch"];
	const handleSave = ()=>{
		console.log(tempStudent);
		addStudent(tempStudent)
	}
	const handleAddStudent = (e) => {
		e.preventDefault();
		let prn = document.getElementById("prn");
		let studentemail = document.getElementById("studentemail");
		let AddStudentBranch = document.getElementById("AddStudentBranch");
		let AddStudentBatch = document.getElementById("AddStudentBatch");
		// let i = 1;
		setTempStudent((prevTempStudent) => [
			...prevTempStudent,
			[
				prn.value,
				studentemail.value,
				AddStudentBranch.value,
				AddStudentBatch.value,
			],
		]);

		// console.log(tempStudent);
	};
	const inputstyle = {
		fontFamily: "Roboto, sans-serif",
		textAlign: "center",
		fontSize: "15px",
		fontWeight: "550",
		color: "#004257",
		width: "20%",
	};

	return (
	<div>
		<div>
			<form className='' onSubmit={handleAddStudent} method='post'>
				<div className='mb-3 d-flex'>
					<label
						htmlFor='prn'
						className='form-label me-2'
						style={inputstyle}
					>
						Student PRN
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
						style={inputstyle}
					>
						Student Email:
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
						style={inputstyle}
					>
						Student Branch:
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
						style={inputstyle}
					>
						Student Batch:
					</label>
					<select className='form-select' id={`AddStudentBatch`}>
						{batch.map((opt) => {
							return <option value={opt}>{opt}</option>;
						})}
					</select>
				</div>

				<div className='d-flex justify-content-center col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing '>
					<input
						type='submit'
						id='edit-submit'
						name='op'
						value='Submit'
						className='form-control-login btn btn-success btn-lg'
						style={{
							width: "176px",
							height: "50px",
							padding: "10px",
							backgroundColor: "#004257",
							borderRadius: "10px",
							border: "none",
							color: "#fff",
							fontSize: "24px",
							fontWeight: "600",
							boxShadow:
								"0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
							fontFamily: "Roboto, sans-serif",
							marginBottom: "20px",
						}}
					/>
				</div>
			</form>
			<div className='my-4'>
				<Table header={header} body={tempStudent} />
			</div>
			</div>
			<div
					className='container d-flex justify-content-center '
					style={{
						marginBottom: "20px",
					}}
				>
					<div
						className='btn'
						style={{
							fontFamily: "Roboto, sans-serif",
							textAlign: "center",
							fontSize: "15px",
							fontWeight: "550",
							backgroundColor: "#004257",
							color: "#FFF",
							width: "fit-content",
						}}
						onClick={handleSave}
					>
						Send Credentials and Save
					</div>
				</div>
		
		

		</div>
	);
};

export default AddStdManually;
