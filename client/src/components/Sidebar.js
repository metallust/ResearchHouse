import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = (props) => {
	const pathname = useLocation().pathname;
	const buttons = props.roles;
	return (
		<div className="bg-light" style={{ maxWidth: "13rem" }}>
			<div className="m-2 min-vh-100 flex-column">
				{buttons.map((btn) => {
					return (
						<Link className={`btn btn-light w-100 m-1 ${pathname === btn.url ? "text-white" : ""}`} to={btn.url} key={btn.name} style={{ background: pathname === btn.url ? "#085f63" : "" }}>
							<div className="text-center text-md-start" style={{ whiteSpace: "nowrap" }}>
								{btn.icon}
								<span className="ms-3 d-none d-md-inline">{btn.name}</span>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
