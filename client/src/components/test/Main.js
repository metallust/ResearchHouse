import React from "react";
import StudentSidebar from "./StudentSidebar";
import Timeline from "./Timeline";

function Main() {
	const card = {
		width: "130px",
		height: "25vh",
		backgroundColor: "#E1F8FF",
		border: "2px solid #E1F8FF",
		borderRadius: "10px",
		overflowY: "scroll",
		padding: "0 10px ",
		margin: "10px 0 0 0",
		boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<div className='container-fluid d-flex flex-column' style={{ height: "100vh" }}>
			<div className='row flex-grow-1'>
				<div className='col p-0' style={{ maxWidth: "300px" }}>
					<StudentSidebar />
				</div>
				<div className='col-7 overflow-x-hidden pb-4'>
					<div style={{ height: "100px" }}>
						<Timeline
							n={5}
							complete={2}
							descriptions={[
								{
									title: "Synopsis",
									position: 1,
								},
								{
									title: "Research",
									position: 1,
								},
								{
									title: "Implementation",
									position: 1,
								},
								{
									title: "Reports",
									position: 1,
								},
								{
									title: "Publication",
									position: 1,
								},
							]}
						/>
					</div>

					<div>
						<div className='d-flex justify-content-between'>
							<h4 className='fw-bold'>Submission : </h4>
							<div className='d-flex gap-3'>
								<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='grid-2' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height={16} width={16}>
									<path
										fill='currentColor'
										d='M224 80c0-26.5-21.5-48-48-48H80C53.5 32 32 53.5 32 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM288 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zM480 336c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z'
									></path>
								</svg>

								<svg xmlns='http://www.w3.org/2000/svg' height='16' width='16' viewBox='0 0 512 512'>
									<path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
								</svg>
								<p>Last Submission on 12 Dec 2023</p>
							</div>
						</div>

						<div className='d-flex gap-3'>
							<div style={card} className='fw-bold'>
								PDF
							</div>
							<div style={card} className='fw-bold'>
								PDF
							</div>
						</div>
					</div>
					<div className='mt-5'>
						<div className='d-flex justify-content-between'>
							<h4 className='fw-bold'>Guide Review : </h4>
							<div className='d-flex gap-3'>
								<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='grid-2' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height={16} width={16}>
									<path
										fill='currentColor'
										d='M224 80c0-26.5-21.5-48-48-48H80C53.5 32 32 53.5 32 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM288 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zM480 336c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z'
									></path>
								</svg>

								<svg xmlns='http://www.w3.org/2000/svg' height='16' width='16' viewBox='0 0 512 512'>
									<path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
								</svg>
								<p>Last Submission on 12 Dec 2023</p>
							</div>
						</div>
						<div className='d-flex gap-3'>
							<div style={card} className='fw-bold'>
								PDF
							</div>
						</div>
					</div>
				</div>
				<div
					className='col'
					style={{
						maxWidth: "180px",
					}}
				>
					<div
						className='flex'
						style={{
							display: "flex",
							gap: "10px",
							padding: "10px",
							marginTop: "10px",
							borderRadius: "10px",
							backgroundColor: "#e1f8ff",
							boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
						}}
					>
						<button
							style={{
								border: "none",
								backgroundColor: "transparent",
								color: "black",
								fontWeight: "bold",
							}}
						>
							setting
						</button>
						<button
							style={{
								border: "none",
								backgroundColor: "transparent",
								color: "black",
								fontWeight: "bold",
							}}
						>
							logout
						</button>
					</div>
					<div
						style={{
							marginTop: "10px",
							borderRadius: "10px",
							backgroundColor: "#e1f8ff",
							height: "88%",
							boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.4)",
						}}
					></div>
				</div>
			</div>
		</div>
	);
}

export default Main;
