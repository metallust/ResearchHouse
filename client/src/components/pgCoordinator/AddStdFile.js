import React, { useState } from "react";
import XLSX from "xlsx";
import Table from "../Table";

const AddStdFile = () => {
	const [fileContent, setFileContent] = useState([]);
	const headers = ["#", "PRN", "Email", "Branch", "Batch"];
	const handleSave = () => {};
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
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		border: "none",
		color: "#004257",
		fontSize: "16px",
		fontWeight: "600",
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
						<svg width='16' height='20' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18ZM4 13.01L5.41 14.42L7 12.84V17H9V12.84L10.59 14.43L12 13.01L8.01 9L4 13.01Z' fill='#004257' />
						</svg>
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
			{fileContent && (
				<div
					style={{
						color: "#004257",
						fontWeight: "600",
						marginBottom: "20px",
					}}
				>
					File Content
					<Table header={headers} body={Object.values(fileContent).slice(1, fileContent.length)} />
				</div>
			)}
			<div
				className='container d-flex justify-content-center '
				style={{
					marginBottom: "20px",
				}}
			>
				<button type='button' class='btn btn-primary' onClick={handleSave} style={{ background: "#004256" }}>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default AddStdFile;
