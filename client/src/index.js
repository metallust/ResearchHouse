import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeState from "./Context/ThemeState";
import GuideAllotmentState from "./Context/GuideAllotmentState";
import SocketState from "./Context/Socket/SocketState";
import PeerState from "./Context/Socket/PeerState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GuideAllotmentState>
			<ThemeState>
				<SocketState>
					<PeerState>
						<App />
					</PeerState>
				</SocketState>
			</ThemeState>
		</GuideAllotmentState>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
