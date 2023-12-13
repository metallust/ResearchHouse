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

	const handleSubmit = (event) => {
		event.preventDefault();
		// Placeholder for form submission logic
	};

	const dropdown = {
		width: "80%",
		height: "40%",
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
		<div className='container'>
			<div className='row'>
				<div className='intro clearfix'>
					<div className='offset-md-2 offset-lg-2 col-lg-8 col-md-8 col-sm-12 col-xs-12'>
						<form
							className='form-horizontal'
							role='form'
							method='POST'
							action=''
							id='thisform'
							onSubmit={handleSubmit}
							style={{
								border: "none",
								padding: "20px",
								borderRadius: "5px",
								boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
								background: "#E1F8FF",
								fontFamily: "Roboto, sans-serif",
								textAlign: "center",
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
							<div>
								<h1>Domain Selection</h1>
								<p>
									Select the domain you want to work on.
									Choose your Preferences.
								</p>
							</div>

							{/* New Box for Dropdowns */}
							<div
								className='p-4 m-4'
								style={{
									border: "1px solid black",
									borderRadius: "20px",
									boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
									height: "400px",
									width: "80%",
								}}
							>
								{/* Dropdowns */}
								<div className='d-flex flex-column'>
									{dropdowns.map((index) => (
										<div
											className='d-flex mb-3'
											key={index}
										>
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
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DomainSelection;
