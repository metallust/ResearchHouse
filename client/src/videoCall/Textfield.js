import React, { useContext, useEffect, useState } from "react";
import SocketContext from "../Context/Socket/SocketContext";
import { useNavigate } from "react-router-dom";

function Textfield() {
	const { socket } = useContext(SocketContext);
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [roomId, setroomId] = useState("");

	const handlejoined = (data) => {
		const { roomId } = data;
		navigate(`/videocall/${roomId}`);
	};
	useEffect(() => {
		socket.on("joined-room", handlejoined);
		return () => {
			socket.off("joined-room", handlejoined);
		};
	}, [socket]);

	const handleJoinRoom = (e) => {
		e.preventDefault();
		socket.emit("join-room", { roomId: roomId, emailId: email });
	};
	return (
		<form action=''>
			<div className='container d-flex justify-content-center align-items-center vh-100 flex-column'>
				<input className='m-2' type='email' placeholder='Enter your Email here' value={email} onChange={(e) => setEmail(e.target.value)} />
				<input className='m-2' type='text' placeholder='Enter Room id' value={roomId} onChange={(e) => setroomId(e.target.value)} />
				<button className='btn btn-primary mt-3' onClick={handleJoinRoom}>
					Enter Room
				</button>
			</div>
		</form>
	);
}

export default Textfield;
