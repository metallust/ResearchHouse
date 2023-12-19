import React from "react";
import { useState } from "react";
// import AddStdManually from "./AddStdManually";
// import AddStdFile from "./AddStdFile";
import AddGuidesManually from "./AddGuideManually";
import AddGuideFile from "./AddGuideFile";

const AddGuides = () => {
	const [tab, setTab] = useState(0);
	const handleSave = () => {};
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
					Add New Guides/s
				</div>
				<div
					className='nav nav-tabs static'
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: "10px",
					}}
				>
					<div className='nav-item'>
						<div
							className={`nav-link ${tab === 0 ? "active" : ""}`}
							style={{
								width: "90%",
								height: "fit-content",
								padding: "20px",
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
								width: "90%",
								height: "fit-content",
								padding: "20px",
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
					style={{ height: "90%", overflowX: "scroll" }}
				>
					{tab === 0 ? <AddGuidesManually /> : <AddGuideFile />}
				</div>
				<div
					className='container d-flex justify-content-center '
					style={{
						marginBottom: "20px",
					}}
				>
					<div
						className='btn btn'
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
		</>
	);
};

export default AddGuides;
