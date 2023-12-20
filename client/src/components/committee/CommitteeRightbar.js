import React from "react";

function CommitteeRightbar() {
	const buttonstyle = {
		background: "none",
		border: "none",
	};
	return (
		<div className='p-0 m-0'>
			<div
				style={{
					backgroundColor: "#E1F8FF",
					marginTop: "10px",
					borderRadius: "10px",
					padding: "20px",
					margin: "10px",
					display: "flex",
					justifyContent: "space-between",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				}}
			>
				<button style={buttonstyle}>
					<svg
						width='20'
						height='20'
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
						width='20'
						height='20'
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
						width='20'
						height='20'
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
				className='container d-flex flex-column align-items-center '
				style={{
					backgroundColor: "#E1F8FF",
					maxWidth: "130px",
					height: "85vh",
					borderRadius: "10px",
					border: "none",
					padding: "10px",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "#E1F8FF",
					textAlign: "center",

					fontWeight: "550",
					color: "#004257",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<div className='btn btn-transparent d-flex flex-column align-items-center fs-7 '>
					<svg
						width='25'
						height='25'
						viewBox='0 0 27 26'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20.1626 0.630132C21.1549 -0.0866473 22.5811 0.346464 22.7778 1.36792L26.3772 20.0615C26.5739 21.0829 25.4105 22.0147 24.223 21.7176C22.6272 21.3194 17.909 20.1726 15.1449 19.7993C13.4294 19.5601 11.6775 19.4806 9.91911 19.5619L9.73493 23.9692C9.72881 24.116 9.689 24.2622 9.61776 24.3993C9.54653 24.5364 9.44526 24.6619 9.31976 24.7684C9.19425 24.875 9.04696 24.9606 8.88628 25.0204C8.72561 25.0802 8.55471 25.113 8.38334 25.1169C8.21196 25.1208 8.04347 25.0957 7.88748 25.0432C7.73149 24.9906 7.59106 24.9115 7.47421 24.8104C7.35736 24.7094 7.26637 24.5883 7.20644 24.4542C7.14651 24.32 7.11881 24.1754 7.12493 24.0286L7.30237 19.7944C6.95103 19.8392 6.60014 19.8883 6.24982 19.9417C4.16908 20.2587 2.158 19.1818 1.80724 17.3602L0.967619 12.9997C0.616866 11.1781 2.08429 9.43149 4.13396 8.95316C4.58775 8.84656 5.03276 8.736 5.46858 8.6193L7.3804 18.5482L7.4242 18.5398C7.50538 18.3523 7.64152 18.1834 7.81894 18.05C7.99636 17.9166 8.20882 17.8235 8.43496 17.7799C8.6611 17.7364 8.89295 17.744 9.10722 17.8019C9.32149 17.8599 9.51062 17.9662 9.6556 18.1101L9.95707 18.0521L7.98983 7.83537C9.54171 7.27571 11.034 6.58805 12.4446 5.7826C14.8738 4.40929 18.8285 1.59134 20.1626 0.630132Z'
							fill='#004257'
						/>
					</svg>
					Announcements
				</div>
				<div className='btn btn-transparent d-flex flex-column align-items-center fs-7'>
					<svg
						width='26'
						height='26'
						viewBox='0 0 26 26'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.7058 23.0435C11.6244 23.3527 11.5634 23.666 11.5227 23.9834C11.482 24.3008 11.4535 24.6263 11.4373 24.96C10.3956 24.8379 9.4028 24.5938 8.45881 24.2275C7.51482 23.8613 6.64 23.3934 5.83435 22.8237C5.02871 22.2541 4.2963 21.5949 3.63714 20.8462C2.97797 20.0975 2.41646 19.2837 1.9526 18.4048C1.48875 17.5259 1.13068 16.5981 0.87841 15.6216C0.626137 14.645 0.5 13.6318 0.5 12.582C0.5 11.4346 0.646481 10.3278 0.939443 9.26172C1.23241 8.19564 1.6515 7.19873 2.19674 6.271C2.74198 5.34326 3.393 4.50098 4.14982 3.74414C4.90664 2.9873 5.75298 2.33626 6.68883 1.79102C7.62468 1.24577 8.6175 0.82666 9.66728 0.533691C10.7171 0.240723 11.8279 0.0901693 12.9997 0.0820312C14.1472 0.0820312 15.2498 0.228516 16.3078 0.521484C17.3657 0.814453 18.3626 1.23763 19.2984 1.79102C20.2343 2.3444 21.0765 2.99544 21.8252 3.74414C22.5739 4.49284 23.229 5.33919 23.7905 6.2832C24.352 7.22721 24.7711 8.22005 25.0478 9.26172C25.3245 10.3034 25.475 11.4102 25.4994 12.582H24.6328C24.5188 12.3949 24.4008 12.2118 24.2788 12.0327C24.1567 11.8537 24.0143 11.6828 23.8515 11.52C23.8027 10.812 23.6766 10.1243 23.4731 9.45703H8.51984C8.45474 9.97786 8.40591 10.4946 8.37336 11.0073C8.34081 11.52 8.32046 12.0449 8.31233 12.582C8.31233 13.111 8.3286 13.6318 8.36115 14.1445C8.3937 14.6572 8.4466 15.1781 8.51984 15.707H12.9997C12.9997 15.9674 13.0201 16.2279 13.0608 16.4883C13.1014 16.7487 13.1543 17.0091 13.2194 17.2695H8.78839C8.88604 17.7334 9.01625 18.242 9.17901 18.7954C9.34176 19.3488 9.54521 19.89 9.78934 20.4189C10.0335 20.9479 10.3142 21.4443 10.6316 21.9082C10.949 22.3721 11.3071 22.7505 11.7058 23.0435ZM22.875 7.89453C22.5576 7.23535 22.1833 6.61686 21.752 6.03906C21.3207 5.46126 20.8324 4.93229 20.2872 4.45215C19.7419 3.97201 19.1641 3.54476 18.5538 3.17041C17.9435 2.79606 17.2843 2.49089 16.5763 2.25488C16.8693 2.66178 17.1297 3.0931 17.3575 3.54883C17.5854 4.00456 17.7929 4.47249 17.9801 4.95264C18.1673 5.43278 18.3259 5.92106 18.4561 6.41748C18.5863 6.9139 18.7003 7.40625 18.7979 7.89453H22.875ZM12.9997 1.64453C12.5928 1.64453 12.2185 1.75439 11.8767 1.97412C11.5349 2.19385 11.2175 2.48275 10.9246 2.84082C10.6316 3.19889 10.3712 3.60173 10.1433 4.04932C9.91548 4.49691 9.70797 4.95671 9.5208 5.42871C9.33363 5.90072 9.18308 6.34831 9.06915 6.77148C8.95522 7.19466 8.86163 7.56901 8.78839 7.89453H17.2111C17.146 7.57715 17.0524 7.2028 16.9303 6.77148C16.8082 6.34017 16.6577 5.89258 16.4786 5.42871C16.2996 4.96484 16.0962 4.50911 15.8683 4.06152C15.6405 3.61393 15.38 3.20703 15.0871 2.84082C14.7941 2.47461 14.4727 2.18571 14.1227 1.97412C13.7728 1.76253 13.3985 1.65267 12.9997 1.64453ZM9.43535 2.24268C8.74363 2.47868 8.08447 2.77979 7.45785 3.146C6.83124 3.51221 6.24938 3.93945 5.71229 4.42773C5.17519 4.91602 4.68692 5.44906 4.24748 6.02686C3.80803 6.60465 3.43369 7.22721 3.12445 7.89453H7.20151C7.29103 7.44694 7.40089 6.97087 7.53109 6.46631C7.6613 5.96175 7.82406 5.45719 8.01936 4.95264C8.21467 4.44808 8.42626 3.96387 8.65412 3.5C8.88198 3.03613 9.14239 2.61702 9.43535 2.24268ZM2.06247 12.582C2.06247 13.6644 2.21302 14.7061 2.51412 15.707H6.94517C6.88007 15.1862 6.83124 14.6694 6.79869 14.1567C6.76614 13.644 6.74986 13.1191 6.74986 12.582C6.74986 12.0531 6.76614 11.5322 6.79869 11.0195C6.83124 10.5068 6.88007 9.986 6.94517 9.45703H2.51412C2.21302 10.458 2.06247 11.4997 2.06247 12.582ZM3.10004 17.2695C3.41742 17.9287 3.79176 18.5472 4.22306 19.125C4.65437 19.7028 5.14264 20.2358 5.68787 20.7241C6.23311 21.2124 6.81903 21.6356 7.44565 21.9937C8.07226 22.3517 8.73143 22.6569 9.42314 22.9092C9.13018 22.5023 8.86977 22.071 8.64191 21.6152C8.41405 21.1595 8.20653 20.6916 8.01936 20.2114C7.83219 19.7313 7.67351 19.243 7.5433 18.7466C7.41309 18.2502 7.2951 17.7578 7.1893 17.2695H3.10004ZM22.0083 19.479C22.5373 19.7476 23.0174 20.0771 23.4487 20.4678C23.88 20.8584 24.2462 21.2979 24.5473 21.7861C24.8484 22.2744 25.0844 22.7952 25.2553 23.3486C25.4262 23.902 25.5076 24.4798 25.4994 25.082H23.937C23.937 24.4391 23.8149 23.8328 23.5708 23.2632C23.3266 22.6935 22.993 22.1971 22.5698 21.7739C22.1467 21.3507 21.6462 21.013 21.0684 20.7607C20.4906 20.5085 19.8843 20.3864 19.2496 20.3945C18.5986 20.3945 17.9923 20.5166 17.4308 20.7607C16.8693 21.0049 16.3729 21.3385 15.9416 21.7617C15.5102 22.1849 15.1725 22.6854 14.9284 23.2632C14.6843 23.841 14.5622 24.4473 14.5622 25.082H12.9997C12.9997 24.488 13.0811 23.9142 13.2439 23.3608C13.4066 22.8075 13.6385 22.2826 13.9396 21.7861C14.2407 21.2897 14.6069 20.8503 15.0383 20.4678C15.4696 20.0853 15.9497 19.7557 16.4786 19.479C15.8683 19.0396 15.3963 18.4902 15.0627 17.8311C14.729 17.1719 14.5622 16.4639 14.5622 15.707C14.5622 15.0641 14.6843 14.4578 14.9284 13.8882C15.1725 13.3185 15.5062 12.8221 15.9293 12.3989C16.3525 11.9757 16.8489 11.638 17.4186 11.3857C17.9882 11.1335 18.5986 11.0114 19.2496 11.0195C19.8925 11.0195 20.4987 11.1416 21.0684 11.3857C21.638 11.6299 22.1344 11.9635 22.5576 12.3867C22.9808 12.8099 23.3185 13.3104 23.5708 13.8882C23.823 14.466 23.9451 15.0723 23.937 15.707C23.937 16.4557 23.7702 17.1597 23.4365 17.8188C23.1029 18.478 22.6268 19.0314 22.0083 19.479ZM19.2496 18.832C19.6809 18.832 20.0837 18.7507 20.4581 18.5879C20.8324 18.4251 21.166 18.2013 21.459 17.9165C21.752 17.6317 21.9758 17.3021 22.1304 16.9277C22.285 16.5534 22.3664 16.1465 22.3745 15.707C22.3745 15.2757 22.2931 14.8729 22.1304 14.4985C21.9676 14.1242 21.7438 13.7905 21.459 13.4976C21.1742 13.2046 20.8446 12.9808 20.4703 12.8262C20.0959 12.6715 19.689 12.5902 19.2496 12.582C18.8183 12.582 18.4155 12.6634 18.0411 12.8262C17.6668 12.9889 17.3331 13.2127 17.0402 13.4976C16.7472 13.7824 16.5234 14.112 16.3688 14.4863C16.2142 14.8607 16.1328 15.2676 16.1247 15.707C16.1247 16.1383 16.206 16.5412 16.3688 16.9155C16.5315 17.2899 16.7553 17.6235 17.0402 17.9165C17.325 18.2095 17.6546 18.4333 18.0289 18.5879C18.4032 18.7425 18.8101 18.8239 19.2496 18.832Z'
							fill='#004257'
						/>
					</svg>
					Virtual Meet
				</div>
				<div className='btn btn-transparent d-flex flex-column align-items-center fs-7'>
					<svg
						width='24'
						height='28'
						viewBox='0 0 24 28'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9.36935 23.4505C9.36935 24.1484 9.6466 24.8177 10.1401 25.3113C10.6336 25.8048 11.303 26.082 12.0009 26.082C12.6989 26.082 13.3682 25.8048 13.8617 25.3113C14.3552 24.8177 14.6325 24.1484 14.6325 23.4505M9.36935 23.4505C9.36935 22.7525 9.6466 22.0832 10.1401 21.5896C10.6336 21.0961 11.303 20.8189 12.0009 20.8189C12.6989 20.8189 13.3682 21.0961 13.8617 21.5896C14.3552 22.0832 14.6325 22.7525 14.6325 23.4505M9.36935 23.4505H1.47461M14.6325 23.4505H22.5272M8.05356 5.0294H15.9483M8.05356 8.97677H12.0009M12.0009 16.8715L9.36935 14.2399H5.42198C5.07301 14.2399 4.73833 14.1013 4.49157 13.8545C4.24482 13.6078 4.10619 13.2731 4.10619 12.9241V2.39782C4.10619 2.04885 4.24482 1.71418 4.49157 1.46742C4.73833 1.22066 5.07301 1.08203 5.42198 1.08203H18.5799C18.9288 1.08203 19.2635 1.22066 19.5103 1.46742C19.757 1.71418 19.8957 2.04885 19.8957 2.39782V12.9241C19.8957 13.2731 19.757 13.6078 19.5103 13.8545C19.2635 14.1013 18.9288 14.2399 18.5799 14.2399H14.6325L12.0009 16.8715Z'
							stroke='#004257'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					Timeline
				</div>
				<div className='btn btn-transparent d-flex flex-column align-items-center fs-7'>
					<svg
						width='26'
						height='19'
						viewBox='0 0 26 19'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M25.5 18.0508C25.5 18.2624 25.4227 18.4455 25.2681 18.6001C25.1134 18.7547 24.9303 18.832 24.7188 18.832C24.5072 18.832 24.3241 18.7547 24.1694 18.6001C24.0148 18.4455 23.9375 18.2624 23.9375 18.0508V7.77246L15.3193 12.0938C14.6683 12.4193 13.8952 12.582 13 12.582C12.1048 12.582 11.3317 12.4193 10.6807 12.0938L1.45215 7.47949C0.817383 7.15397 0.5 6.76742 0.5 6.31982C0.5 5.87223 0.817383 5.49381 1.45215 5.18457L10.6807 0.570312C11.3317 0.244792 12.1048 0.0820312 13 0.0820312C13.8952 0.0820312 14.6683 0.244792 15.3193 0.570312L24.5479 5.18457C25.1012 5.46126 25.4105 5.80306 25.4756 6.20996C25.4919 6.22624 25.5 6.25879 25.5 6.30762V18.0508ZM16.1006 13.6562L20.8125 11.2881V14.7305C20.8125 15.4303 20.0516 16.0285 18.5298 16.5249C17.008 17.0213 15.1647 17.2695 13 17.2695C10.8353 17.2695 8.99202 17.0213 7.47021 16.5249C5.9484 16.0285 5.1875 15.4303 5.1875 14.7305V11.2881L9.89941 13.6562C10.5505 13.9818 11.584 14.1445 13 14.1445C14.416 14.1445 15.4495 13.9818 16.1006 13.6562Z'
							fill='#004257'
						/>
					</svg>
					Student
				</div>
				<div className='btn btn-transparent d-flex flex-column align-items-center fs-7'>
					<svg
						width='26'
						height='21'
						viewBox='0 0 26 21'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8.62504 14.582C8.53168 14.582 8.43832 14.5957 8.34926 14.6246C7.84301 14.789 7.31059 14.8945 6.75005 14.8945C6.1895 14.8945 5.65708 14.789 5.15044 14.6246C5.06138 14.5957 4.96841 14.582 4.87505 14.582C2.45084 14.582 0.487173 16.5539 0.500063 18.9812C0.505532 20.007 1.34889 20.832 2.37506 20.832H11.125C12.1512 20.832 12.9946 20.007 13 18.9812C13.0129 16.5539 11.0493 14.582 8.62504 14.582ZM6.75005 13.332C8.82114 13.332 10.5 11.6531 10.5 9.58201C10.5 7.51092 8.82114 5.83202 6.75005 5.83202C4.67896 5.83202 3.00006 7.51092 3.00006 9.58201C3.00006 11.6531 4.67896 13.332 6.75005 13.332ZM23.625 0.832031H8.62504C7.59106 0.832031 6.75005 1.70117 6.75005 2.76914V4.58202C7.66489 4.58202 8.51176 4.84687 9.25004 5.27733V3.33203H23V14.582H20.5V12.082H15.5V14.582H12.5219C13.268 15.2339 13.8157 16.0949 14.0723 17.082H23.625C24.659 17.082 25.5 16.2129 25.5 15.1449V2.76914C25.5 1.70117 24.659 0.832031 23.625 0.832031Z'
							fill='#004257'
						/>
					</svg>
					Guides
				</div>
				<div className='btn btn-transparent d-flex flex-column align-items-center fs-7'>
					<svg
						width='26'
						height='18'
						viewBox='0 0 26 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M12.9343 0.832031C10.7813 0.832031 9.03598 2.86974 9.03598 5.38339C9.03598 7.12668 9.87548 8.64072 11.1082 9.4052L9.67871 10.0677L5.87456 11.8321C5.50706 12.0158 5.32365 12.3274 5.32365 12.7684V16.9581C5.35388 17.4819 5.66817 17.9701 6.17773 17.9784H19.7115C20.2932 17.9278 20.5875 17.4592 20.5933 16.9581V12.7684C20.5933 12.3274 20.4098 12.0158 20.0424 11.8321L16.3759 10.0677L14.8522 9.34584C16.0344 8.56416 16.8327 7.08284 16.8327 5.38341C16.8326 2.86974 15.0873 0.832031 12.9343 0.832031ZM6.64631 2.43253C5.71979 2.46772 4.9855 2.86864 4.42763 3.50745C3.81054 4.27657 3.50971 5.18974 3.5039 6.09816C3.54179 7.44145 4.14283 8.71311 5.21283 9.37828L0.940896 11.3635C0.646875 11.4737 0.5 11.7309 0.5 12.1352V15.4977C0.522958 15.9436 0.7545 16.3184 1.18865 16.3248H4.0279V12.7684C4.07488 11.8176 4.52138 11.0491 5.32365 10.6741L8.16213 9.3237C8.38263 9.19505 8.59402 9.0202 8.79615 8.7997C7.62581 6.99395 7.46329 4.83114 8.21754 2.92884C7.72698 2.62861 7.17567 2.43568 6.64631 2.43253ZM19.3252 2.43253C18.7193 2.44522 18.1594 2.66834 17.6994 2.98345C18.4331 4.90297 18.2307 7.06711 17.1477 8.74428C17.3866 9.01991 17.6353 9.2313 17.8925 9.37832L20.621 10.6741C21.4521 11.1299 21.8808 11.9053 21.889 12.7685V16.3249H24.8106C25.291 16.2834 25.4958 15.9001 25.5 15.4977V12.1352C25.5 11.7677 25.3531 11.5105 25.0591 11.3635L20.8418 9.35059C21.9355 8.54418 22.4847 7.33559 22.4953 6.09816C22.4662 5.11874 22.167 4.20932 21.5716 3.50745C20.9494 2.83247 20.1776 2.43968 19.3252 2.43253Z'
							fill='#004257'
						/>
					</svg>
					Committee
				</div>
			</div>
		</div>
	);
}

export default CommitteeRightbar;
