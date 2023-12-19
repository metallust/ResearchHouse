import React, { useState } from "react";
import XLSX from "xlsx";
import Table from "../Table";

const AddStdFile = () => {
	const [fileContent, setFileContent] = useState([]);
	const headers = ["#", "PRN", "Email", "Branch", "Batch"];
	const handleSave = ()=>{
		
	}
	const handleFileSelect = (event) => {
		const file = event.target.files[0];

		const reader = new FileReader();

		reader.onload = (e) => {
			const data = new Uint8Array(e.target.result);

			const workbook = XLSX.read(data, { type: "array" });

			// Assuming there is only one sheet in the Excel file
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];

			// Convert the sheet to a 2D array
			const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

			// Now, you can set the file content using the state
			console.log(rows);
			setFileContent(rows);
			// console.log(Object.values(fileContent).length);
			// Reset the value of the file input to clear the selected file
			// event.target.value = null;
		};

		reader.readAsArrayBuffer(file);
	};

	// const handleShowContent = () => {
	//   // Access the file content from the state and do something with it
	//   console.log(Object.keys(fileContent), Object.values(fileContent)[0]);
	// };

	const inputStyle = {
		//width: "80%",
		height: "40px",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		border: "none",
		color: "#004257",
		fontSize: "16px",
		fontWeight: "600",
		fontFamily: "Roboto, sans-serif",
		marginBottom: "20px",
	};

	return (
		<div>
			<div className='form-group' style={{ marginBottom: "15px" }}>
				<div style={{ position: "relative" }}>
					<span
						style={{
							position: "absolute",
							top: "50%",
							right: "10px",
							transform: "translateY(-50%)",
							color: "#999",
							fontSize: "14px",
							zIndex: "1",
						}}
					>
						Add File
					</span>
					<input
						type='file'
						id='consentLetter'
						name='consentLetter'
						className='form-control'
						style={{
							...inputStyle, // Apply inputStyle here
							cursor: "pointer", // Change cursor for better indication
							lineHeight: "40px", // Adjust line height to vertically center text
							position: "relative", // Ensure positioning works as expected
							overflow: "hidden", // Hide overflow
						}}
						onChange={handleFileSelect}
					/>
				</div>
			</div>
			{/* <button onClick={handleShowContent}>Show Content</button> */}

			{/* Display the content of the file */}
			{fileContent && (
				<div
					style={{
						color: "#004257",
						fontSize: "20px",
						fontWeight: "600",
						fontFamily: "Roboto, sans-serif",
						marginBottom: "20px",
					}}
				>
					File Content
					<Table
						header={headers}
						body={Object.values(fileContent).slice(1,fileContent.length)}
					/>
				</div>
			)}
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

export default AddStdFile;
