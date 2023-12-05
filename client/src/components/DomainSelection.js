import React from "react";
import Timeline from "./Timeline/Index";

const DomainSelection = () => {
	return (
		<div className="container d-flex justify-content-center pt-5">
			<div
				className="p-5"
				style={{
					border: "1px solid black",
					borderRadius: "20px",
				}}
			>
				<Timeline
					n={3}
					complete={1}
					linewidth={500}
					descriptions={[
						{
							title: "Domain Selection",
							position: 1,
						},
						{
							title: "Comfirmation",
							position: 1,
						},
						{
							title: "Guide allotment",
							position: 1,
						},
					]}
				/>
				<div>
					<h1>Domain Selection</h1>
					<p>Select the domain you want to work on. You can select a maximum of 3 domains. You can change your selection later.</p>
				</div>
			</div>
		</div>
	);
};

export default DomainSelection;
