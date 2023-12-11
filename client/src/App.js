import ThemeState from "./Context/ThemeState";
import LoginPage from "./components/Loginpage";
import Signup from "./components/Signuppage";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import DomainSelection from "./components/DomainSelection";
import Todo from "./components/Todo";
import Colors from "./components/Colors";
import StudentDashboard from "./components/student/StudentDashboard";
import Addstudent from "./components/pgCoordinator/Addstudent";

function App() {
	const { theme, changeTheme } = useContext(ThemeContext);
	console.log(theme);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/' element={<LandingPage />} />
				<Route path='/domain' element={<DomainSelection />} />
				<Route path='/Home' element={<Dashboard />} />
				<Route path='/addstudent' element={<Addstudent />} />
				<Route
					path='/card'
					element={
						<div
							style={{
								// center TODO
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: "100vh",
								width: "100vw",
								backgroundColor: theme.primary,
							}}
						>
							<Todo />
						</div>
					}
				/>
				<Route path='/color' element={<Colors />} />

				<Route exact path="/studentdashboard" element={<StudentDashboard />}>
					<Route exact path="/studentdashboard/myprogress" element={<Colors />}/>
				</Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
