import ThemeState from "./Context/ThemeState";
import LoginPage from "./components/Loginpage";
import Signup from "./components/Signuppage";
import LandingPage from "./components/LandingPage";
import { Event, CompletedEvent, ActiveEvent } from "./components/Timeline/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./components/Timeline/Index";

function App() {
	return (
    <ThemeState >
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/" element={<LandingPage />} />
				<Route
					path="/irfan"
					element={
						<div className="container">
							<Timeline />
							<div className="row">
								<div className="col p-5">
									<Event width={50} height={20} />
								</div>
								<div className="col p-5">
									<Event width={100} height={20} />
								</div>
								<div className="col p-5">
									<CompletedEvent width={50} height={20} />
								</div>
								<div className="col p-5">
									<CompletedEvent width={100} height={20} />
								</div>
								<div className="col p-5">
									<ActiveEvent width={50} height={20} />
								</div>
								<div className="col p-5">
									<ActiveEvent width={100} height={20} />
								</div>
							</div>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
    </ThemeState>
	);
}

export default App;
