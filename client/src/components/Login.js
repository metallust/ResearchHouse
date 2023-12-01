import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import permissionContext from "../context/permissionContext";

function Login(props) {
	const { fetchPermission } = useContext(permissionContext);
	const [info, setInfo] = useState({ username: "", password: "" });
	let navigate = useNavigate();
	const host = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

	useEffect(() => {
		let type = localStorage.type;
		let token = localStorage.token;
		if (type && token) navigate("/");
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		let option = {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				username: info.username,
				password: info.password,
			}),
		};
		const response = await fetch(host + "/api/auth/login", option);
		const content = await response.json();
		if (!content.success) {
			props.showAlert("Invalid credentials", "danger");
		} else {
			localStorage.setItem("token", content.authtoken);
			props.showAlert("Logged In successfully", "success");
			await fetchPermission();
			navigate("/");
		}
	};

	const onchange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	return (
		<div className="min-vh-100 p-4">
			<div className="card border p-4 w-50 min-vh-500 container align-self-center overflow-hidden">
				<h1 className="text-center">Login</h1>

				<form onSubmit={onSubmit} className="">
					<div className="mb-3">
						<label htmlFor="username" className="form-label">
							Username
						</label>
						<input id="username" className="form-control" required name="username" value={info.username} onChange={onchange} />
					</div>
					<div className="mb-3">
						<label htmlFor="password1" className="form-label">
							Password:
						</label>
						<input id="password1" type="password" className="form-control" minLength={3} maxLength={8} required name="password" value={info.password} onChange={onchange} />
					</div>
					<button type="submit" className="btn btn-secondary">
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
