import React from "react";

const StudentSetup = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		// Add logic for form submission here
	};
	const inputStyle = {
		// width: "80%",
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
		<section
			className='login-box custom'
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
			}}
		>
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
									boxShadow:
										"0px 4px 4px rgba(0, 0, 0, 0.25)",
									background: "#E1F8FF",
									fontFamily: "Roboto, sans-serif",
									textAlign: "center",
								}}
							>
								<div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing'>
									<p
										style={{
											fontSize: "32px",
											fontWeight: "700",
											color: "#004257",
											fontFamily: "Roboto, sans-serif",
											marginBottom: "10px",
										}}
									>
										Get Started
									</p>

									<input
										placeholder='Name'
										type='text'
										id='studentname'
										name='studentname'
										value=''
										className='form-control-login input_box'
										style={{
											width: "80%",
											height: "40%",
											padding: "10px",
											borderRadius: "10px",
											boxShadow:
												"0px 4px 4px rgba(0, 0, 0, 0.25)",
											border: "none",
											color: "#004257",
											fontSize: "16px",
											fontWeight: "600",
											fontFamily: "Roboto, sans-serif",
											marginBottom: "20px",
										}}
									/>
								</div>
								<div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing'>
									<input
										placeholder='Mobile'
										id='studentmobile'
										type='password'
										name='studentmobile'
										className='form-control-login input_box'
										style={{
											width: "80%",
											height: "40%",
											padding: "10px",
											borderRadius: "10px",
											boxShadow:
												"0px 4px 4px rgba(0, 0, 0, 0.25)",
											border: "none",
											color: "#004257",
											fontSize: "16px",
											fontWeight: "600",
											fontFamily: "Roboto, sans-serif",
											marginBottom: "20px",
										}}
									/>
								</div>
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
										Add File (PNG, PDF, JPEG)
									</span>
									<input
										type='file'
										id='consentLetter'
										name='consentLetter'
										accept='.png, .pdf, .jpeg'
										className='form-control'
										style={{
											...inputStyle, // Apply inputStyle here
											cursor: "pointer", // Change cursor for better indication
											lineHeight: "40px", // Adjust line height to vertically center text
											position: "relative", // Ensure positioning works as expected
											overflow: "hidden", // Hide overflow
										}}
									/>
								</div>

								<div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing'>
									<input
										type='submit'
										id='edit-submit'
										name='op'
										value='Submit'
										className='form-control-login btn btn-success btn-lg'
										style={{
											width: "176px",
											height: "50px",
											padding: "10px",
											backgroundColor: "#004257",
											borderRadius: "10px",
											border: "none",
											color: "#fff",
											fontSize: "24px",
											fontWeight: "600",
											boxShadow:
												"0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
											fontFamily: "Roboto, sans-serif",
											marginBottom: "20px",
										}}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentSetup;
