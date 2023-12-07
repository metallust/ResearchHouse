import ConfettiExplosion from "react-confetti-explosion";

function Confetti() {
	// const [isExploding, setIsExploding] = useState(false);

	const props = {
		force: 0.8,
		duration: 3000,
		particleCount: 30,
		width: 1600,
	};
	return (
		<div
			className='container'
			style={{
				display: "flex",
				justifyContent: "center",
				alignContent: "bottom",
				opacity: 1,
			}}
		>
			<ConfettiExplosion width={1000} particleCount={250} force={0.8} duration={2500} />;
		</div>
	);
}

export default Confetti;
