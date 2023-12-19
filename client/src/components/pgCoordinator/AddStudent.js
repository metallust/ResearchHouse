import React from "react";
import { useState } from "react";
import AddStdManually from "./AddStdManually";
import AddStdFile from "./AddStdFile";

const AddStudent = () => {
	const [tab, setTab] = useState(0);

	return (
		<>
			<div className='px-4'>
				<div className='flex-grow-1 d-flex justify-content-between'>
					<h3 className='fw-bold'>Add Students: </h3>
				</div>

				<ul className='nav nav-tabs'>
					<li className='nav-item'>
						<a
							className={`nav-link ${tab === 0 ? "active" : ""}`}
							aria-current='page'
							onClick={() => {
								setTab(0);
							}}
							href='#'
						>
							Manually
						</a>
					</li>
					<li className='nav-item'>
						<a
							className={`nav-link ${tab === 1 ? "active" : ""}`}
							aria-current='page'
							onClick={() => {
								setTab(1);
							}}
							href='#'
						>
							Upload
						</a>
					</li>
				</ul>

				<div className='pt-4'>{tab === 0 ? <AddStdManually /> : <AddStdFile />}</div>
			</div>
		</>
	);
};

export default AddStudent;
