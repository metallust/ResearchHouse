import React, { useContext } from "react";
import CoordinatorContext from "../Context/Coordinator/CoordinatorContext";

const SignupPage = () => {
	const context = useContext(CoordinatorContext)
	const handleSubmit = (event) => {
		event.preventDefault();
		const aishe = document.getElementById('aisheCode');
		const collegeName = document.getElementById('collegeName');
		const state = document.getElementById('state');
		const district = document.getElementById('district');
		const city = document.getElementById('city');
		const fullName = document.getElementById('fullName');
		const email = document.getElementById('email');
		const phone = document.getElementById('phone');
		const password = document.getElementById('password');
		const confirmPassword = document.getElementById('confirmPassword');
		const consentLetter = document.getElementById('consentLetter');
		context.createUser([aishe, collegeName, state, district, city, fullName, email, phone, password, confirmPassword, consentLetter])
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
			className='signup-box custom'
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
				marginTop: "50px",
				marginBottom: "50px",
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
									// padding: "20px",
									borderRadius: "5px",
									boxShadow:
										"0px 4px 4px rgba(0, 0, 0, 0.25)",
									background: "#E1F8FF",
									fontFamily: "Roboto, sans-serif",
									textAlign: "center",
									padding: "20px 15%"
								}}
							>
								<p
									style={{
										fontSize: "32px",
										fontWeight: "700",
										color: "#004257",
										fontFamily: "Roboto, sans-serif",
										marginBottom: "5px",
									}}
								>
									ResearchHouse
								</p>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='text'
										id='aisheCode'
										name='aisheCode'
										placeholder='AISHE Code'
										className='form-control'
										style={inputStyle}
									/>
								</div>

								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='text'
										id='collegeName'
										name='collegeName'
										placeholder='College Name'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='text'
										id='state'
										name='state'
										placeholder='State'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='text'
										id='district'
										name='district'
										placeholder='District'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='text'
										id='city'
										name='city'
										placeholder='City'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='text'
										id='fullName'
										name='fullName'
										placeholder='Full Name'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='email'
										id='email'
										name='email'
										placeholder='Email'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='tel'
										id='phone'
										name='phone'
										placeholder='Phone Number'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='password'
										id='password'
										name='password'
										placeholder='Password'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='password'
										id='confirmPassword'
										name='confirmPassword'
										placeholder='Confirm Password'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<input
										type='text'
										id='iicInstituteCode'
										name='iicInstituteCode'
										placeholder='IIC Institute Code'
										className='form-control'
										style={inputStyle}
									/>
								</div>
								<div
									className='form-group'
									style={{ marginBottom: "15px" }}
								>
									<div style={{ position: "relative" }}>
										<span
											style={{
												position: "absolute",
												top: "50%",
												right: "10px",
												transform: "translateY(-50%)",
												color: "#999",
												fontSize: "14px",
												zIndex: "1"
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
											height: "40px", // Reduced button height
											lineHeight: "40px", // Center align text vertically
											padding: "0 10px", // Adjust padding
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

export default SignupPage;
