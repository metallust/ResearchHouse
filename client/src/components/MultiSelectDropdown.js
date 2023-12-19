import React, { useState } from "react";

function MultiSelectDropdown() {
	const [selectedSubjects, setSelectedSubjects] = useState([]);
	const subjects = [
		{ value: "science", label: "Science" },
		{ value: "maths", label: "Maths" },
		{ value: "history", label: "History" },
		// Add more subjects as needed
	];

	const addSubject = (e) => {
		const selectedValue = e.target.value;
		const selectedText = e.target.options[e.target.selectedIndex].text;

		if (selectedValue !== "") {
			setSelectedSubjects([
				...selectedSubjects,
				{ value: selectedValue, label: selectedText },
			]);
		}
	};

	const removeSubject = (subjectToRemove) => {
		const updatedSubjects = selectedSubjects.filter(
			(subject) => subject.value !== subjectToRemove.value
		);
		setSelectedSubjects(updatedSubjects);
	};

	return (
		<div>
			<select
				style={{
					width: "80%",
					height: "40%",
					padding: "10px",
					borderRadius: "10px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					border: "none",
					color: "#004257",
					fontSize: "16px",
					fontWeight: "600",
					fontFamily: "Roboto, sans-serif",
					marginBottom: "20px",
				}}
				onChange={addSubject}
			>
				<option value=''>Select a subject</option>
				{subjects.map((subject) => (
					<option key={subject.value} value={subject.value}>
						{subject.label}
					</option>
				))}
			</select>
			<div>
				{selectedSubjects.map((subject) => (
					<button
						className='mx-1'
						style={{
							width: "fit-content",
							height: "30px",
							backgroundColor: "#004257",
							borderRadius: "10px",
							border: "none",
							color: "#fff",
							fontSize: "12px",
							fontWeight: "200",
							boxShadow:
								"0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
							fontFamily: "Roboto, sans-serif",
							marginBottom: "20px",
						}}
						key={subject.value}
						onClick={() => removeSubject(subject)}
					>
						{subject.label} &times;
					</button>
				))}
			</div>
		</div>
	);
}

export default MultiSelectDropdown;
