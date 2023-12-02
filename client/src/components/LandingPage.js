import React from "react";
import bgImage from "../assets/pexels-olena-bohovyk-3646172.jpg";

const LandingPAge = () => {
	return (
		<>
			<img src={bgImage} alt="bgImage " className="d-block position-absolute" style={{ height: "100vh", width: "100%", zIndex: -1 }} />
			<div className="container ">Hello</div>
		</>
	);
};

export default LandingPAge;
