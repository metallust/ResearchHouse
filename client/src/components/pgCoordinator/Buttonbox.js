import React, { useState } from "react";

function Buttonbox() {
	const [buttons, setButtons] = useState([]);

	const addNewButton = () => {
		const buttonName = window.prompt("Enter the name for the button:");
		if (buttonName) {
			setButtons([...buttons, buttonName]);
		}
	};

	return (
		<div>
			<button onClick={addNewButton}>Add Button</button>
			<div>
				{buttons.map((buttonName, index) => (
					<button key={index}>{buttonName}</button>
				))}
			</div>
		</div>
	);
}

export default Buttonbox;
