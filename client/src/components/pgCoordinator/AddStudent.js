import React from 'react'
import { useState } from 'react';
import AddStdManually from './AddStdManually';
import AddStdFile from './AddStdFile'

const AddStudent = () => {
	const [tab, setTab] = useState(0);
	const handleSave = () => {

	}
	return (
		<div>
			<div id='AddStudentModal' style={{ borderRadius: "12px", width: "55%", }}>
				<ul className='nav nav-tabs static'>
					<li className='nav-item w-50'>
						<a
							className={`nav-link ${tab === 0 ? "active" : ""}`}
							aria-current='page'
							onClick={() => {
								setTab(0);
							}}
							href='#'
						>
							<h4>Add Manually</h4>
						</a>
					</li>
					<li className='nav-item w-50'>
						<a
							className={`nav-link ${tab === 1 ? "active" : ""}`}
							aria-current='page'
							onClick={() => {
								setTab(1);
							}}
							href='#'
						>
							<h4>Add Using XL File</h4>
						</a>
					</li>
				</ul>
				<div className='container mt-3' style={{ height: "80%", overflowX: "scroll" }}>
					{tab === 0 ? <AddStdManually /> : <AddStdFile />}
				</div>
				<div className='container d-flex justify-content-between '>
					<div className="btn btn-dark" onClick={handleSave}>Send Credentials and Save</div>
				</div>
			</div>
		</div>
	)
}

export default AddStudent
