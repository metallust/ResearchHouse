import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CoordinatorContext from "../Context/Coordinator/CoordinatorContext";
import { useContext } from "react";
import StudentContext from "../Context/Student/StudentContext";

const LoginPage = () => {
	const role = ["coordinator", "student", "guide", "committee"];
	const { login: PGlogin } = useContext(CoordinatorContext);
	const { studentLogin } = useContext(StudentContext);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		// Add logic for form submission here
		const email = document.querySelector("#email").value;
		const password = document.querySelector("#password").value;
		const role = document.getElementById("loginRole").value;
		console.log(role);
		if (role === "coordinator") {
			const token = await PGlogin(email, password);
			if (token.statusCode !== 200) {
				alert("Invalid Credentials");
				return;
			}
			localStorage.setItem("token", [token.data.token, token.data.type]);
			navigate("/pg");
		} else if (role === "student") {
			const token = await studentLogin(email, password);
			if (token.statusCode !== 200) {
				alert("Invalid Credentials");
				return;
			}
			localStorage.setItem("token", [token.data.token, token.data.type]);
			console.log(localStorage.getItem("token"));
			navigate("/studentsetup");
		} else if (role === "guide") {
			// const token = await studentLogin(email, password);
			// if (token.statusCode !== 200) {
			// 	alert("Invalid Credentials");
			// 	return;
			// }
			// localStorage.setItem("token", [token.data.token, token.data.type]);
			console.log(localStorage.getItem("token"));
			navigate("/guidesetup");
		}
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
								id='thisform'
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
											marginBottom: "5px",
										}}
									>
										ResearchHouse
									</p>
									<p
										style={{
											fontSize: "48px",
											fontWeight: "700",
											color: "#004257",
											fontFamily: "Roboto, sans-serif",
											marginBottom: "20px",
										}}
									>
										Login
									</p>
									<input
										placeholder='Email'
										type='text'
										id='email'
										name='email'
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
										placeholder='Password'
										id='password'
										type='password'
										name='password'
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
								<div className='mb-3 d-flex'>
									<label
										htmlFor={`loginRole`}
										className='form-label me-2'
									>
										Role:
									</label>
									<select
										className='form-select'
										id={`loginRole`}
									>
										{role.map((opt) => {
											return (
												<option key={opt} value={opt}>
													{opt}
												</option>
											);
										})}
									</select>
								</div>
								<div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing'>
									<span
										style={{
											display: "block",
											marginBottom: "20px",
											color: "#004257",
											fontSize: "16px",
											fontWeight: "600",
											fontFamily: "Roboto, sans-serif",
										}}
									>
										<a href=''>Forgot Your Password?</a>
									</span>
								</div>
								<div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing'>
									<input
										type='submit'
										id='edit-submit'
										name='op'
										value='Submit'
										onClick={handleSubmit}
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
								<div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing'>
									<span
										style={{
											fontSize: "16px",
											fontWeight: "500",
											color: "#004257",
											fontFamily: "Roboto, sans-serif",
										}}
									>
										Don't Have an Account?{" "}
										<Link
											to='/signup'
											style={{
												textDecoration: "none",
												color: "#004257",
												fontWeight: "bold",
											}}
										>
											Register
										</Link>
									</span>
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
