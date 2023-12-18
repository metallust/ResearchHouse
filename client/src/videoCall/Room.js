import React, { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import SocketContext from "../../Context/Socket/SocketContext";
import PeerContext from "../../Context/Socket/PeerContext";
import ReactPlayer from "react-player";

function Room() {
	const { socket } = useContext(SocketContext);
	const { peer, createOffer, createAnswer, sendStream, remoteStream } = useContext(PeerContext);
	const [myStream, setMyStream] = useState(null);
	const [usersConnected, setUsersConnected] = useState([]);
	const [remoteSocketid, setRemoteSocketid] = useState("");

	const getUserMediaStream = useCallback(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
		setMyStream(stream);
	}, [sendStream]);

	const handleNewUserJoined = async (data) => {
		const { emailId, socketId } = data;
		console.log("New User Joined", emailId);
		//remote users socket id
		setRemoteSocketid(socketId);
		setUsersConnected([...usersConnected, emailId]);

		// create offer and send to remote user
		const offer = await createOffer();
		socket.emit("call-user", { to: remoteSocketid, emailId, offer });
		console.log("Sending offer to ", emailId);
	};

	const handleIncommingCall = async (data) => {
		const { from, offer } = data;
		console.log("Incomming Call from ", from, offer);
		// const ans = await createAnswer(offer);
		// socket.emit("answer-call", { emailId: from, answer: ans });
		// setUsersConnected([...usersConnected, from]);
	};

	const handleCallAccepted = async (data) => {
		const { answer } = data;
		await peer.setRemoteDescription(answer);
	};

	useEffect(() => {
		socket.on("user-joined", handleNewUserJoined);
		socket.on("incomming-call", handleIncommingCall);
		socket.on("call-accepted", handleCallAccepted);
		return () => {
			socket.off("user-joined", handleNewUserJoined);
			socket.off("incomming-call", handleIncommingCall);
			socket.off("call-accepted", handleCallAccepted);
			socket.off("welcome", (data) => {
				console.log("Received private message:", data.text);
			});
		};
	}, [socket]);

	useEffect(() => {
		getUserMediaStream();
	}, [getUserMediaStream]);

	return (
		<div>
			<button onClick={() => sendStream(myStream)}>send Stream</button>
			<div>Connected to {usersConnected[0]}</div>
			<ReactPlayer url={myStream} playing muted />
			<ReactPlayer url={remoteStream} playing />
		</div>
	);
}

export default Room;
