import React from "react";
import bgImage from "../assets/pexels-olena-bohovyk-3646172.jpg";
import Navbar from "./Navbar";

const LandingPAge = () => {
	return (
		<>
			<Navbar />
			<img
				src={bgImage}
				alt='bgImage '
				className='d-block position-absolute'
				style={{ height: "100vh", width: "100%", zIndex: -1 }}
			/>
		</>
	);
};

export default LandingPAge;
