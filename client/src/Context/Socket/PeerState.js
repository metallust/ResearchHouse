import { useState, useMemo, useEffect } from "react";
import PeerContext from "./PeerContext";
import { io } from "socket.io-client";

const PeerState = (props) => {
	const [remoteStream, setRemoteStream] = useState(null);

	const peer = useMemo(
		() =>
			new RTCPeerConnection({
				iceServers: [
					{
						urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"],
					},
				],
			}),
		[]
	);

	const createOffer = async () => {
		const offer = await peer.createOffer();
		await peer.setLocalDescription(offer);
		return offer;
	};

	const createAnswer = async (offer) => {
		await peer.setRemoteDescription(offer);
		const answer = await peer.createAnswer();
		await peer.setLocalDescription(answer);
		return answer;
	};

	const sendStream = async (stream) => {
		const tracks = stream.getTracks();
		for (const track of tracks) {
			peer.addTrack(track, stream);
		}
	};

	const handleTrack = (event) => {
		console.log("Track received");
		setRemoteStream(event.streams[0]);
	};
	const handleNegotiationNeeded = async () => {
		console.log("Negotiation needed");
	};

	useEffect(() => {
		peer.addEventListener("track", handleTrack);
		peer.addEventListener("negotiationneeded", handleNegotiationNeeded);
		return () => {
			peer.removeEventListener("track", handleTrack);
			peer.removeEventListener("negotiationneeded", handleNegotiationNeeded);
		};
	}, [peer, handleTrack, handleNegotiationNeeded]);

	return <PeerContext.Provider value={{ peer, createOffer, createAnswer, sendStream, remoteStream }}>{props.children}</PeerContext.Provider>;
};

export default PeerState;
