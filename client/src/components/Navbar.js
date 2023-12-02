import React from "react";
import {Link} from "react-router-dom";
// import permissionContext from "../context/permissionContext";

function Navbar() {
	// const { permission } = useContext(permissionContext);
	let nav_btn = [
		{
			name: "Home",
			url: "/home",
		},
		{
			name: "Contact Us",
			url: "/contact",
		},
		{
			name: "About US",
			url: "/about",
		}
	];

	// nav_btn = nav_btn.filter((item) => Object.keys(permission).includes(item.url.slice(1)));

	// let navigate = useNavigate();
	// const handlelogout = () => {
	// 	localStorage.removeItem("token");
	// 	navigate("/login");
	// };
	return (
		<nav className="navbar navbar-expand-lg  fixed-top p-3" style={{ backgroundColor: "transparent" }}>
			<div className="container-fluid ">
				<div className="navbar-brand " to="/">
					<b>Research house</b>
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
					<ul className="navbar-nav">
						{nav_btn.map((btns, id) => {
							return (
								<li
									key={id}
									className="nav-item "
									style={{
										borderBottom: "5px solid transparent",
									}}
								>
									<btn className={`btn `} aria-current="page" to={btns.url}>
										<b>{btns.name}</b>
									</btn>
								</li>
							);
						})}
					</ul>
					{/* {localStorage.getItem("token") ? (
						<>
							<button className="btn btn-dark mx-1" onClick={handlelogout}>
								{localStorage.token}
							</button>
						</>
					) : (
						<Link className="btn btn-dark mx-1" to="/login" role="button">
							Login
						</Link>
					)} */}
				</div>
					<a className="btn btn-dark mx-1" to="#" role="button">
							Login
					</a>
			</div>
		</nav>
	);
}

export default Navbar;
