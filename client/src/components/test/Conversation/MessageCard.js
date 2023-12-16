import React from "react";
import "./Index.css";

function MessageCard() {
	const msg = "acutal msg lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";
	const avatar = "https://www.w3schools.com/howto/img_avatar.png";
	return (
		<div className='d-flex msgcard' style={{ maxWidth: "500px" }}>
			<img src='https://source.unsplash.com/random?macaron' alt='avatar' class='avatar' />
			<div className='message'>
				<div className='name'>name</div>
				<div>data: 20 Dec 2023 7 days ago</div>
				<div style={{ height: "10px" }}></div>
				<div className='msg'>{msg}</div>
			</div>
		</div>
	);
}

export default MessageCard;
