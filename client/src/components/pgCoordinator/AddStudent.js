import React from "react";
import { useState } from "react";
import AddStdManually from "./AddStdManually";
import AddStdFile from "./AddStdFile";

const AddStudent = () => {
	const [tab, setTab] = useState(0);

	return (
		<>
			<div
				id='AddStudentModal'
				style={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div
					style={{
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
				<div
					className='nav nav-tabs static'
					style={{
						display: "flex",
						// justifyContent: "center",
						marginBottom: "10px",
						// width: "100vw",
					}}
				>
					<div className='nav-item '>
						<div
							className={`nav-link ${tab === 0 ? "active" : ""}`}
							style={{
								height: "fit-content",
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
							Manually
						</div>
					</div>
					<div className='nav-item'>
						<div
							className={`nav-link ${tab === 1 ? "active" : ""}`}
							style={{
								height: "fit-content",
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
							Upload
						</div>
					</div>
				</div>
				<div className='container mt-3' style={{ height: "90%", overflowX: "scroll" }}>
					{tab === 0 ? <AddStdManually /> : <AddStdFile />}
				</div>
			</div>
		</>
	);
};

export default AddStudent;
