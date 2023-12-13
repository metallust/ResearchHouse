import React, { useContext, useEffect } from "react";
import Node from "./Node";
import ThemeContext from "../../Context/ThemeContext";
import { useAnimate } from "framer-motion";

const defaultwidth = 15;

const calculateloadingpercentage = (n, complete, customwidth, linewidth) => {
	// calculating total width of events
	let totalwidthofevents = 0;
	for (let i = 0; i < n - 1; i++) {
		let w1 = customwidth[i] ? customwidth[i] : defaultwidth;
		let w2 = customwidth[i + 1] ? customwidth[i + 1] : defaultwidth;

		totalwidthofevents += w1 / 2 + w2 / 2;
	}
	// calculating separatoin
	const separation = (linewidth - totalwidthofevents) / (n - 1);

	// calculating loading length
	let loadinglength = 0;
	for (let i = 0; i < complete; i++) {
		let w1 = customwidth[i] ? customwidth[i] : defaultwidth;
		loadinglength += w1 + separation;
	}

	let loadingpercentage = (loadinglength / linewidth) * 100;
	return loadingpercentage;
};

function Index({ n, complete, recentcompleted = 0, customwidth = {}, descriptions = {}, lineheight = 4, linewidth = 700 }) {
	const theme = useContext(ThemeContext).theme;
	const [scope, animate] = useAnimate();

	const animatecomplete = async () => {
		// completed animation
		const till = Math.max(complete, recentcompleted);
		for (let i = 0; i <= till; i++) {
			// change the node from active from completed
			animate([
				[
					`.active-${i - 1}`,
					{
						opacity: 0,
					},
					{
						duration: 0,
					},
				],
				[
					`.complete-${i - 1}`,
					{
						opacity: 1,
					},
					{
						delay: 0,
						duration: 0.6,
						ease: "easeOut",
					},
				],
			]);

			// confetti

			// progressline animation
			await animate(
				".progressline",
				{
					background: `linear-gradient(to right, #004256 ${calculateloadingpercentage(n, i, customwidth, linewidth)}%, #e1f8ff 0%)`,
				},
				{ duration: 0.35, ease: "linear" }
			);
		}
		// change the node from none to active
		animate([
			[
				`.node-${till}`,
				{
					opacity: 0,
				},
				{
					duration: 0,
				},
			],
			[
				`.active-${till}`,
				{
					opacity: 1,
				},
				{
					duration: 0,
				},
			],
		]);
	};

	useEffect(() => {
		animatecomplete();
	}, []);

	const lineStyle = {
		width: `${linewidth}px`, // Adjust line width as needed
		height: `${lineheight}px`, // Adjust line height as needed
		position: "relative",
		display: "flex",
		justifyContent: "space-between",
		// transition: "backgroundColor 1s linear", // Transition the width property over 1 second
	};

	return (
		<div
			ref={scope}
			className='px-5'
			style={{
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				paddingTop: "35px",
			}}
		>
			<div className='progressline' style={lineStyle}>
				{Array.from({ length: n }, (_, i) => {
					let w = customwidth[i] === undefined ? defaultwidth : customwidth[i];
					console.log(w);
					return (
						<div key={i}>
							<div className={`position-absolute node-${i}`}>
								<Node type={"none"} width={w} desc={descriptions[i]} />
							</div>
							<div className={`position-absolute active-${i}`} style={{ opacity: 0 }}>
								<Node type={"active"} width={w} desc={descriptions[i]} />
							</div>
							<div className={`position-absolute complete-${i}`} style={{ opacity: 0 }}>
								<Node type={"complete"} width={w} desc={descriptions[i]} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Index;
