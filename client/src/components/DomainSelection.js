import React from "react";
import Timeline from "./Timeline/Index";

const DomainSelection = () => {
	return (
		<div>
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
		</div>
	);
};

export default DomainSelection;
