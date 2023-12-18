import React from "react";
import { useState } from "react";
import AddStdManually from "./AddStdManually";
import AddStdFile from "./AddStdFile";

const AddStudent = () => {
	const [tab, setTab] = useState(0);
	const handleSave = () => {};
	return (
		<>
			<div id='AddStudentModal'>
				<div
					style={{
						textAlign: "center",
						fontSize: "28px",
						fontWeight: "700",
						color: "#004257",
						fontFamily: "Roboto, sans-serif",
						marginBottom: "5px",
						marginTop: "20px",
					}}
				>
					Add New Student/s
				</div>
				<div className='nav nav-tabs static'>
					<div className='nav-item '>
						<div
							className={`nav-link ${tab === 0 ? "active" : ""}`}
							style={{
								// backgroundColor: "#E1F8FF",
								width: "90%",
								height: "fit-content",
								// borderRadius: "10px",
								// border: "none",
								padding: "20px",
								// boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
								// background: "#E1F8FF",
								fontFamily: "Roboto, sans-serif",
								textAlign: "center",
								fontSize: "15px",
								fontWeight: "550",
								color: "#004257",
							}}
							aria-current='page'
							onClick={() => {
								setTab(0);
							}}
						>
							Add Manually
						</div>
					</div>
					<div className='nav-item'>
						<div
							className={`nav-link ${tab === 1 ? "active" : ""}`}
							style={{
								// backgroundColor: "#E1F8FF",
								width: "90%",
								height: "fit-content",
								// borderRadius: "10px",
								// border: "none",
								padding: "20px",
								// boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
								// background: "#E1F8FF",
								fontFamily: "Roboto, sans-serif",
								textAlign: "center",
								fontSize: "15px",
								fontWeight: "550",
								color: "#004257",
							}}
							aria-current='page'
							onClick={() => {
								setTab(1);
							}}
						>
							Add Using XL File
						</div>
					</div>
				</div>
				<div
					className='container mt-3'
					style={{ height: "80%", overflowX: "scroll" }}
				>
					{tab === 0 ? <AddStdManually /> : <AddStdFile />}
				</div>
				<div className='container d-flex justify-content-between '>
					<div
						className='btn btn'
						style={{
							fontFamily: "Roboto, sans-serif",
							textAlign: "center",
							fontSize: "15px",
							fontWeight: "550",
							backgroundColor: "#004257",
							color: "#FFF",
						}}
						onClick={handleSave}
					>
						Send Credentials and Save
					</div>
				</div>
			</div>
		</>
	);
};

export default AddStudent;
