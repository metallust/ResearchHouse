import React, { useState } from "react";
import Buttonbox from "./Buttonbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";

const PgCoordinatorSidebar = () => {
	const branch = "Computer Science";
	const batch = "2022-2023";
	const schedule = "Presentation";
	const scheduledate = "05/12/2012";
	const [showModal, setShowModal] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const handleSave = () => {
		// Handle save action with the inputValue
		console.log("Input value:", inputValue);
		// You can add your logic here to handle the input value (e.g., save it to state)
		handleClose();
	};

	const handleClose = () => {
		setInputValue("");
		setShowModal(false);
	};
	return (
		<div className='container d-flex flex-column align-items-center'>
			<div
				className='logo'
				style={{
					fontSize: "28px",
					fontWeight: "700",
					color: "#004257",
					fontFamily: "Roboto, sans-serif",
					marginBottom: "5px",
					marginTop: "20px",
				}}
			>
				ResearchHouse
			</div>
			<div
				className='container py-2'
				style={{
					backgroundColor: "#E1F8FF",
					width: "90%",
					height: "fit-content",
					borderRadius: "10px",
					border: "none",
					padding: "20px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "#E1F8FF",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
				}}
			>
				{branch}
				<div></div>
				{batch}
				<div></div>
				<div
					style={{
						fontSize: "12px",
					}}
				>
					Upcomming : {schedule} ({scheduledate})
				</div>
			</div>
			<div
				className='container mt-3 py-2'
				style={{
					backgroundColor: "#E1F8FF",
					width: "90%",
					height: "fit-content",
					borderRadius: "10px",
					border: "none",
					padding: "20px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "#E1F8FF",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
				}}
			>
				Department
				<button
					style={{
						width: "20px",
						height: "20px",
						position: "relative",
						padding: "0",
						backgroundColor: "#004257",
						border: "none",
					}}
				>
					<FontAwesomeIcon
						icon={faPlus}
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							fontSize: "12px",
							color: "white",
						}}
						onClick={() => setShowModal(true)}
					/>
				</button>
				{/* <Buttonbox /> */}
			</div>

			<div
				className='container mt-3 py-2'
				style={{
					backgroundColor: "#E1F8FF",
					width: "90%",
					height: "fit-content",
					borderRadius: "10px",
					border: "none",
					padding: "20px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "#E1F8FF",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
				}}
			>
				Batch
				<button
					style={{
						width: "20px",
						height: "20px",
						position: "relative",
						padding: "0",
						backgroundColor: "#004257",
						border: "none",
					}}
					onClick={() => setShowModal(true)}
				>
					<FontAwesomeIcon
						icon={faPlus}
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							fontSize: "12px",
							color: "white",
						}}
					/>
				</button>
				<div>
					{/* Modal */}
					<Modal show={showModal} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Enter Text</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{/* Input field inside the modal */}
							<input
								type='text'
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
							/>
						</Modal.Body>
						<Modal.Footer>
							{/* Save and Close buttons */}
							<Button variant='primary' onClick={handleSave}>
								Save
							</Button>
							<Button variant='secondary' onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</div>
	);
};
export default PgCoordinatorSidebar;
