import React from "react";
import Timeline from "./Timeline/Index";

const DomainSelection = () => {
	const dropdowns = [...Array(6).keys()]; // Array to map through for dropdowns

	const handleMakeChanges = () => {
		// Logic for making changes
	};

	const handleConfirm = () => {
		// Logic for confirmation
	};

	return (
		<div
			className='container d-flex flex-column mt-5'
			style={{
				border: "1px solid black",
				borderRadius: "20px",
				boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Adding shadow
				width: "70%",
			}}
		>
			<div className='px-5 pb-5'>
				<Timeline
					n={3}
					complete={1}
					linewidth={500}
					descriptions={[
						{
							title: "Domain Selection",
							position: 1,
						},
						{
							title: "Confirmation",
							position: 1,
						},
						{
							title: "Guide Allotment",
							position: 1,
						},
					]}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
				}}
			>
				<div
					className='p-4 m-4'
					style={{
						border: "1px solid black",
						borderRadius: "20px",
						boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Adding shadow
						height: "400px",
						width: "80%",
					}}
				>
					{/* Dropdowns */}
					<div className='d-flex flex-column'>
						{dropdowns.map((index) => (
							<div className='d-flex mb-3' key={index}>
								<label
									htmlFor={`dropdown${index + 1}`}
									className='form-label'
									style={{
										minWidth: "150px",
										marginRight: "10px",
									}}
								>
									Preference {index + 1}:
								</label>
								<select className='form-select' id={`dropdown${index + 1}`}>
									{/* Dropdown Options */}
								</select>
							</div>
						))}
					</div>

					{/* Buttons */}
					<div className='mt-4 d-flex justify-content-between'>
						<button className='btn btn-secondary' onClick={handleMakeChanges}>
							Make Changes
						</button>
						<button className='btn btn-primary' onClick={handleConfirm}>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DomainSelection;
