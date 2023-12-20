import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FinalSubmission = () => {
	const navigate = useNavigate();

	return (
		<div className='d-flex flex-column'>
			<Link
				style={{ backgroundColor: "#004257", color: "white" }}
				className='btn mb-2'
			>
				Submit Final Report
			</Link>
		</div>
	);
};

export default FinalSubmission;
