import React, { useState } from "react";

const IdeaModal = () => {
	const [inputText, setInputText] = useState("");
	const [resultText, setResultText] = useState("");
	const [modalOpen, setModalOpen] = useState(false);

	const modalStyle = {
		display: modalOpen ? "block" : "none",
		position: "fixed",
		zIndex: 1,
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		overflow: "auto",
		border: "none",
		borderRaduis: "10px",
		backgroundColor: "rgba(0,0,0,0.4)",
	};

	const modalContentStyle = {
		backgroundColor: "#fefefe",
		margin: "15% auto",
		padding: "20px",
		borderRaduis: "20px",
		border: "1px solid #888",
		width: "80%",
	};

	const closeBtnStyle = {
		float: "right",
		cursor: "pointer",
	};

	const handleInputChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = () => {
		if (inputText.trim() !== "") {
			setResultText(`Question :"${inputText}". answer : ...`);
		} else {
			setResultText("Please enter a question.");
		}
	};

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setInputText("");
		setResultText("");
	};

	return (
		<div>
			<button onClick={openModal}>Open Modal</button>

			<div style={modalStyle}>
				<div style={modalContentStyle}>
					<span style={closeBtnStyle} onClick={closeModal}>
						&times;
					</span>
					<div>
						<p
							style={{
								fontSize: "24px",
								fontWeight: "700",
								color: "#004257",
								fontFamily: "Roboto, sans-serif",
								marginBottom: "20px",
							}}
						>
							Check Whether your Idea is Orignal!
						</p>
						<div className='d-flex justify-content-between'>
							<input
								placeholder='Enter Your Idea'
								type='text'
								id='idea'
								name='idea'
								onChange={handleInputChange}
								className='form-control-login input_box'
								style={{
									width: "80%",
									height: "40%",
									padding: "10px",
									borderRadius: "10px",
									boxShadow:
										"0px 4px 4px rgba(0, 0, 0, 0.25)",
									border: "none",
									color: "#004257",
									fontSize: "16px",
									fontWeight: "600",
									fontFamily: "Roboto, sans-serif",
									marginRight: "10px",
									marginBottom: "20px",
								}}
							/>

							<input
								type='check'
								id='check'
								name='check'
								value='Check'
								onClick={handleSubmit}
								className='form-control-login btn btn-success btn-lg'
								style={{
									width: "176px",
									height: "40px",
									padding: "10px",
									backgroundColor: "#004257",
									borderRadius: "10px",
									border: "none",
									color: "#fff",
									fontSize: "18px",
									fontWeight: "600",
									boxShadow:
										"0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
									fontFamily: "Roboto, sans-serif",
									marginBottom: "20px",
								}}
							/>
						</div>
						<div
							style={{
								fontFamily: "Roboto, sans-serif",
								fontSize: "18px",
								fontWeight: "600",
							}}
						>
							{resultText}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IdeaModal;
