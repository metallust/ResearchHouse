import React from "react";

function GuideRightbar() {
	const buttonstyle = {
		background: "none",
		border: "none",
	};
	return (
		<div className='p-0 m-0'>
			<div
				style={{
					backgroundColor: "#E1F8FF",
					height: "fit-content",
					borderRadius: "10px",
					border: "none",
					padding: "10px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "#E1F8FF",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
					display: "flex",
					justifyContent: "space-between",
					margin: "10px 10px 10px 10px",
				}}
			>
				<button style={buttonstyle}>
					<svg
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M19.6896 27.7923C19.5479 28.7557 18.6696 29.5207 17.6212 29.5207H12.3796C11.3312 29.5207 10.4529 28.7557 10.3254 27.7215L9.94291 25.044C9.56041 24.8457 9.19208 24.6332 8.82375 24.3923L6.27375 25.4123C5.28208 25.7807 4.19125 25.3698 3.70958 24.4915L1.11708 20.0007C0.621247 19.0657 0.833747 17.9607 1.62708 17.3373L3.79458 15.6515C3.78041 15.439 3.76625 15.2265 3.76625 14.9998C3.76625 14.7873 3.78041 14.5607 3.79458 14.3482L1.64125 12.6623C0.805413 12.0248 0.592913 10.8773 1.11708 9.999L3.73791 5.47983C4.21958 4.6015 5.31041 4.20483 6.27375 4.58733L8.83791 5.6215C9.20625 5.38066 9.57458 5.16816 9.94291 4.96983L10.3254 2.264C10.4529 1.27233 11.3312 0.493164 12.3654 0.493164H17.6071C18.6554 0.493164 19.5337 1.25816 19.6612 2.29233L20.0437 4.96983C20.4262 5.16816 20.7946 5.38066 21.1629 5.6215L23.7129 4.6015C24.7187 4.23316 25.8096 4.644 26.2912 5.52233L28.8979 10.0273C29.4079 10.9623 29.1812 12.0673 28.3879 12.6907L26.2346 14.3765C26.2487 14.589 26.2629 14.8015 26.2629 15.0282C26.2629 15.2548 26.2487 15.4673 26.2346 15.6798L28.3879 17.3657C29.1812 18.0032 29.4079 19.1082 28.9121 20.0007L26.2771 24.5623C25.7954 25.4407 24.7046 25.8373 23.7271 25.4548L21.1771 24.4348C20.8087 24.6757 20.4404 24.8882 20.0721 25.0865L19.6896 27.7923ZM13.0454 26.6873H16.9554L17.4796 23.0748L18.2304 22.7632C18.8537 22.5082 19.4771 22.1398 20.1287 21.6582L20.7662 21.1765L24.1379 22.5365L26.0929 19.1365L23.2171 16.8982L23.3162 16.1048L23.3207 16.0667C23.3616 15.712 23.4012 15.3691 23.4012 14.9998C23.4012 14.6173 23.3587 14.249 23.3162 13.8948L23.2171 13.1015L26.0929 10.8632L24.1237 7.46316L20.7379 8.82316L20.1004 8.32733C19.5054 7.874 18.8679 7.50566 18.2162 7.2365L17.4796 6.92483L16.9554 3.31233H13.0454L12.5212 6.92483L11.7704 7.22233C11.1471 7.4915 10.5237 7.84566 9.87208 8.3415L9.23458 8.809L5.86291 7.46316L3.89375 10.849L6.76958 13.0873L6.67041 13.8807C6.62791 14.249 6.58541 14.6315 6.58541 14.9998C6.58541 15.3682 6.61375 15.7507 6.67041 16.1048L6.76958 16.8982L3.89375 19.1365L5.84875 22.5365L9.23458 21.1765L9.87208 21.6723C10.4812 22.1398 11.0904 22.494 11.7562 22.7632L12.5071 23.0748L13.0454 26.6873ZM19.9587 14.9998C19.9587 17.7382 17.7388 19.9582 15.0004 19.9582C12.262 19.9582 10.0421 17.7382 10.0421 14.9998C10.0421 12.2614 12.262 10.0415 15.0004 10.0415C17.7388 10.0415 19.9587 12.2614 19.9587 14.9998Z'
							fill='#004257'
						/>
					</svg>
				</button>
				<button style={buttonstyle}>
					<svg
						width='30'
						height='34'
						viewBox='0 0 30 34'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M29.1783 24.0583C27.8953 22.6797 25.4947 20.6059 25.4947 13.8125C25.4947 8.65273 21.8769 4.52227 16.9987 3.50891V2.125C16.9987 0.951602 16.0478 0 14.875 0C13.7023 0 12.7514 0.951602 12.7514 2.125V3.50891C7.87317 4.52227 4.25536 8.65273 4.25536 13.8125C4.25536 20.6059 1.85477 22.6797 0.571804 24.0583C0.173366 24.4866 -0.0032744 24.9986 4.59125e-05 25.5C0.0073506 26.5891 0.861999 27.625 2.13169 27.625H27.6184C28.8881 27.625 29.7434 26.5891 29.75 25.5C29.7534 24.9986 29.5767 24.486 29.1783 24.0583ZM4.48446 24.4375C5.8936 22.5801 7.43423 19.5015 7.44153 13.851C7.44153 13.8377 7.43755 13.8258 7.43755 13.8125C7.43755 9.70461 10.7672 6.375 14.875 6.375C18.9829 6.375 22.3125 9.70461 22.3125 13.8125C22.3125 13.8258 22.3086 13.8377 22.3086 13.851C22.3159 19.5022 23.8565 22.5808 25.2656 24.4375H4.48446ZM14.875 34C17.2205 34 19.1231 32.0975 19.1231 29.75H10.627C10.627 32.0975 12.5296 34 14.875 34Z'
							fill='#004257'
						/>
					</svg>
				</button>
				<button style={buttonstyle}>
					<svg
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.33333 6.66667C8.33333 4.89856 9.03571 3.20286 10.286 1.95262C11.5362 0.702379 13.2319 0 15 0C16.7681 0 18.4638 0.702379 19.714 1.95262C20.9643 3.20286 21.6667 4.89856 21.6667 6.66667C21.6667 8.43478 20.9643 10.1305 19.714 11.3807C18.4638 12.631 16.7681 13.3333 15 13.3333C13.2319 13.3333 11.5362 12.631 10.286 11.3807C9.03571 10.1305 8.33333 8.43478 8.33333 6.66667ZM8.33333 16.6667C6.1232 16.6667 4.00358 17.5446 2.44078 19.1074C0.877974 20.6702 0 22.7899 0 25C0 26.3261 0.526784 27.5979 1.46447 28.5355C2.40215 29.4732 3.67392 30 5 30H25C26.3261 30 27.5979 29.4732 28.5355 28.5355C29.4732 27.5979 30 26.3261 30 25C30 22.7899 29.122 20.6702 27.5592 19.1074C25.9964 17.5446 23.8768 16.6667 21.6667 16.6667H8.33333Z'
							fill='#004257'
						/>
					</svg>
				</button>
			</div>
			<div
				style={{
					backgroundColor: "#E1F8FF",
					height: "85vh",
					borderRadius: "10px",
					border: "none",
					padding: "10px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "#E1F8FF",
					fontFamily: "Roboto, sans-serif",
					textAlign: "center",
					fontSize: "15px",
					fontWeight: "550",
					color: "#004257",
					display: "flex",
					justifyContent: "space-between",
					margin: "10px 10px 10px 10px",
				}}
			>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default GuideRightbar;
