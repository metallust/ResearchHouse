import ThemeState from "./Context/ThemeState";
import LoginPage from "./components/Loginpage";
import Signup from "./components/Signuppage";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import DomainSelection from "./components/DomainSelection";

function App() {
	return (
		<ThemeState>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/" element={<LandingPage />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</ThemeState>
		
	);
}

export default App;
