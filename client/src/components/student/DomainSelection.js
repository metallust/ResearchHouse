import React, { useContext } from "react";
import Timeline from "../Timeline/Index";
import Selection from "./Selection";
import DomainConfirm from "./DomainConfirm";
import GuideAllotmentContext from "../../Context/GuideAllotmentContext";

const DomainSelection = () => {
	const context = useContext(GuideAllotmentContext)
	let progressContent;

	if (context.progress[0] === "selection") {
		progressContent = <Selection />;
	} else if (context.progress[0] === "confirm") {
		progressContent = <DomainConfirm />;
	} else {
		progressContent = <b style={{ fontSize: "25px" }}>Waiting for pg coordinator to allocate a guide</b>;
	}

	// const dropdown = {
	// 	width: "80%",
	// 	height: "40%",
	// 	padding: "10px",
	// 	borderRadius: "10px",
	// 	boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
	// 	border: "none",
	// 	color: "#004257",
	// 	fontSize: "16px",
	// 	fontWeight: "600",
	// 	fontFamily: "Roboto, sans-serif",
	// 	marginBottom: "20px",
	// };

	return (
		<>
			<div className="container border border-0" style={{ backgroundColor: "#E1F8FF", width: "57%", height: "83vh", borderRadius: "2rem", minWidth: "820px" }}>
				<Timeline
					key={context.progress[1]}
					n={3}
					complete={context.progress[1]}
					linewidth={500}
					descriptions={[
						{
							title: "Select Domain",
							position: 1,
						},
						{
							title: "Confirmation",
							position: 1,
						},
						{
							title: "Guide Allotment",
							position: 1,
						},
					]}
				/>

				<div className="container" style={{ padding: "0 17%", marginTop: "10%" }}>
					{progressContent}
				</div>


			</div>




		</>


	);
};

export default DomainSelection;
