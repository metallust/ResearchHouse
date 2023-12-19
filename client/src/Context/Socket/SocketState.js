import { useMemo } from "react";
import SocketContext from "./SocketContext";
import { io } from "socket.io-client";

const SocketState = (props) => {
	const socket = useMemo(() => io("localhost:5001"), []);

	return <SocketContext.Provider value={socket}>{props.children}</SocketContext.Provider>;
};

export default SocketState;
