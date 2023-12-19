import React, { useState } from "react";

const IdeaModal = () => {
	const [inputText, setInputText] = useState("");
	const [resultText, setResultText] = useState("");
	const [modalOpen, setModalOpen] = useState(false);

	const handleInputChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = () => {
		if (inputText.trim() !== "") {
			setResultText(`Answer: This is the answer to "${inputText}".`);
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

			{modalOpen && (
				<div className='modal'>
					<div className='modal-content'>
						<span className='close' onClick={closeModal}>
							&times;
						</span>
						<input
							type='text'
							placeholder='Enter your question...'
							value={inputText}
							onChange={handleInputChange}
						/>
						<button onClick={handleSubmit}>Submit</button>
						<div>{resultText}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default IdeaModal;
