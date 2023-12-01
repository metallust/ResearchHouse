import React from "react";
import { Link} from "react-router-dom";
// import permissionContext from "../context/permissionContext";

function Navbar() {
	// const { permission } = useContext(permissionContext);
	let nav_btn = [
		{
			name: "OPD",
			url: "/opd",
		},
		{
			name: "IPD",
			url: "/ipd",
		},
		{
			name: "Nursing",
			url: "/nursing",
		},
		{
			name: "Operation-Theater",
			url: "/ot",
		},
		{
			name: "Inventory",
			url: "/inventory",
		},
		{
			name: "MRD",
			url: "/mrd",
		},
		{
			name: "Wards",
			url: "/wards",
		},
		{
			name: "Rooms",
			url: "/rooms",
		},
		{
			name: "ICU",
			url: "/icu",
		},
		{
			name: "Labs",
			url: "/labs",
		},
		{
			name: "Billing",
			url: "/billing",
		},
		{
			name: "Casualty",
			url: "/casualty",
		},
	];

	// nav_btn = nav_btn.filter((item) => Object.keys(permission).includes(item.url.slice(1)));

	// let navigate = useNavigate();
	// const handlelogout = () => {
	// 	localStorage.removeItem("token");
	// 	navigate("/login");
	// };
	return (
		<nav className="navbar navbar-expand-lg  fixed-top p-0" style={{ backgroundColor: "#9fdfe3" }}>
			<div className="container-fluid ">
				<div className="navbar-brand" to="/">
					R house
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ">
						{nav_btn.map((btns, id) => {
							return (
								<li
									key={id}
									className="nav-item"
									style={{
										borderBottom: "5px solid transparent",
									}}
								>
									<btn className={`btn`} aria-current="page" to={btns.url}>
										{btns.name}
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
			</div>
		</nav>
	);
}

export default Navbar;