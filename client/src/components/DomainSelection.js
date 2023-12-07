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
		<div className='container pt-5'>
			<div
				className='p-5'
				style={{
					border: "1px solid black",
					borderRadius: "20px",
					boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Adding shadow
					marginTop: "20px", // Adjusted margin
				}}
			>
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
				<div className='mt-3'>
					<h1 className='mb-4'>Domain Selection</h1>
					<p>
						Select the domain you want to work on. Choose your
						Preferences.
					</p>
				</div>

				{/* New Box for Dropdowns */}
				<div
					className='p-4 mt-4'
					style={{
						border: "1px solid black",
						borderRadius: "20px",
						boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Adding shadow
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
								<select
									className='form-select'
									id={`dropdown${index + 1}`}
								>
									{/* Dropdown Options */}
								</select>
							</div>
						))}
					</div>

					{/* Buttons */}
					<div className='mt-4 d-flex justify-content-between'>
						<button
							className='btn btn-secondary'
							onClick={handleMakeChanges}
						>
							Make Changes
						</button>
						<button
							className='btn btn-primary'
							onClick={handleConfirm}
						>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DomainSelection;
