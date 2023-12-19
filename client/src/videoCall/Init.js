import React, { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SocketContext from "../Context/Socket/SocketContext";

const LobbyScreen = () => {
	const [email, setEmail] = useState("");
	const [room, setRoom] = useState("");
	const socket = useContext(SocketContext);

	const navigate = useNavigate();

	const handleSubmitForm = useCallback(
		(e) => {
			e.preventDefault();
			socket.emit("room:join", { email, room });
		},
		[email, room, socket]
	);

	const handleJoinRoom = useCallback(
		(data) => {
			const { email, room } = data;
			navigate(`/room/${room}`);
		},
		[navigate]
	);

	useEffect(() => {
		socket.on("room:join", handleJoinRoom);
		return () => {
			socket.off("room:join", handleJoinRoom);
		};
	}, [socket, handleJoinRoom]);

	return (
		<div className='d-flex flex-column align-items-center'>
			<p
				style={{
					fontSize: "48px",
					fontWeight: "700",
					color: "#004257",
					fontFamily: "Roboto, sans-serif",
					marginTop: "30px",
					marginBottom: "20px",
				}}
			>
				Ready To Connect
			</p>
			<form onSubmit={handleSubmitForm}>
				<div
					style={{
						width: "500px",
						height: "350px",
						backgroundColor: " black",
						borderRadius: "10px",
					}}
				></div>
				<label htmlFor='email'>Email ID</label>
				<input
					type='email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<label htmlFor='room'>Room Number</label>
				<input
					type='text'
					id='room'
					value={room}
					onChange={(e) => setRoom(e.target.value)}
				/>
				<br />
				<div className='d-flex justify-content-center'>
					<input
						type='submit'
						id='join'
						name='join'
						value='Join'
						onClick={handleSubmitForm}
						className='form-control-login btn btn-success btn-lg'
						style={{
							width: "176px",
							height: "50px",
							padding: "10px",
							backgroundColor: "#004257",
							borderRadius: "10px",
							border: "none",
							color: "#fff",
							fontSize: "24px",
							fontWeight: "600",
							boxShadow:
								"0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
							fontFamily: "Roboto, sans-serif",
							marginBottom: "20px",
						}}
					/>
				</div>
			</form>
		</div>
	);
};

export default LobbyScreen;
