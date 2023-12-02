import React from "react";

const LoginPage = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		// Add logic for form submission here
	};

	return (
		<section className="login-box custom" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
			<div className="container">
				<div className="row">
					{/* SIH Details */}
					<div className="intro clearfix">
						<div className="offset-md-2 offset-lg-2 col-lg-8 col-md-8 col-sm-12 col-xs-12">
							<form
								className="form-horizontal"
								role="form"
								method="POST"
								action=""
								id="thisform"
								onSubmit={handleSubmit}
								style={{
									border: "1px solid #ccc",
									padding: "20px",
									borderRadius: "5px",
									boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Adding shadow
								}}
							>
								{/* Centered and colored heading */}
								<input type="hidden" name="_token" value="Ryxu4VJXvwNk8YtbUJjaZsMFfDCVtdRmknwOZ1Xx" />
								<div className="row type_margin">
									<div className="offset-md-3 offset-md-3 col-lg-7 col-md-7 col-sm-12 col-xs-12">
										{/* Rest of your form content */}
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing">
											<input placeholder="Email" type="text" id="email" name="email" value="" className="form-control-login input_box" style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
										</div>
										{/* Password Input */}
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing">
											<input placeholder="Password" id="password" type="password" name="password"  className="form-control-login input_box" style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
										</div>
										{/* User Role Select */}
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing">
											<select name="role" className="form-control input_box" style={{ width: "100%", padding: "10px", marginBottom: "10px" }}>
												<option value="">Please Select User Role</option>
												{/* Add options here */}
											</select>
											{/* Forgot Password Link */}
											<span style={{ display: "block", marginBottom: "10px" }}>
												<a href="">Forgot Your Password?</a>
											</span>
										</div>
										{/* Submit Button */}
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing">
											<input
												type="submit"
												id="edit-submit"
												name="op"
												value="Submit"
												className="form-control-login btn btn-success btn-lg"
												
												style={{
													width: "100%",
													padding: "10px",
													backgroundColor: "#4285F4", // Button color
													border: "none",
													color: "#fff",
													boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Button shadow
												}}
											/>
										</div>
										{/* Register Link */}
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing" style={{ textAlign: "center", marginTop: "20px" }}>
											Don't Have Account?{" "}
											<a href="javascript:void(0)" data-toggle="modal" data-target="#Registeration_type_modal" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>
												Register Now
											</a>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
