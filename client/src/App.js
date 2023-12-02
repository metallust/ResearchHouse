import LandingPage from "./components/LandingPage";
import LoginPage from "./components/Loginpage";
//import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="container m-5 d-flex">
			{/* <LoginPage /> */}
			<Event width={100} height={300} padding={12} fill={"white"} bcolor={"black"} iscompleted={false} isActive={true} />
			<div className="mx-4"></div>
			<Event width={100} height={200} padding={20} fill={"white"} bcolor={"black"} iscompleted={false} isActive={true} />
			<div className="mx-4"></div>
			<Event width={200} height={200} padding={10} fill={"white"} bcolor={"black"} iscompleted={false} isActive={true} />
			<div className="mx-4"></div>
		</div>
	);
}

export default App;
