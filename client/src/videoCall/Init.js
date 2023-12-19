import React, { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SocketContext from "../Context/socket/SocketContext";

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
		<div>
			<h1>Lobby</h1>
			<form onSubmit={handleSubmitForm}>
				<div style={{ width: "200px", height: "200px", backgroundColor: " black" }}></div>
				<label htmlFor='email'>Email ID</label>
				<input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
				<br />
				<label htmlFor='room'>Room Number</label>
				<input type='text' id='room' value={room} onChange={(e) => setRoom(e.target.value)} />
				<br />
				<button>Join</button>
			</form>
		</div>
	);
};

export default LobbyScreen;
