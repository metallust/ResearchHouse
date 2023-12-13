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
// import Colors from "./components/Colors";

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
				{/* <Route path='/addstudent' element={<Addstudent />} /> */}
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
				<Route
					path='/color'
					element={
						<>
							<div>
								<h1 className='text-center'>
									<button
										type='button'
										className='btn btn-secondary'
										onClick={changeTheme}
									>
										Change
									</button>
									<></>
									Color Palette : {theme.name}
								</h1>
								<div
									style={{
										height: "200px",
										backgroundColor: theme.primary,
									}}
								></div>
								<h3 className='text-center'>
									primary: "#1b2d48"
								</h3>
								<div
									style={{
										height: "200px",
										backgroundColor: theme.secondary,
									}}
								></div>
								<h3 className='text-center'>
									secondary: "#2c456b"
								</h3>
								<div
									style={{
										height: "200px",
										backgroundColor: theme.tertiary,
									}}
								></div>
								<h3 className='text-center'>
									tertiary: "#3c649f"
								</h3>
								<div
									style={{
										height: "200px",
										backgroundColor: theme.quaternary,
									}}
								></div>
								<h3 className='text-center'>
									quaternary:"#83aff0"
								</h3>
								<div
									style={{
										height: "200px",
										backgroundColor: theme.black,
									}}
								></div>
								<h3 className='text-center'>
									black : "#000000"
								</h3>
								<div
									style={{
										height: "200px",
										backgroundColor: theme.white,
									}}
								></div>
								<h3 className='text-center'>
									white : "#ffffff"
								</h3>
								<div
									style={{
										height: "200px",
										backgroundColor: theme.btn,
									}}
								></div>
								<h3 className='text-center'>btn : "#ff9900"</h3>
								<div
									style={{
										height: "200px",
										backgroundColor: theme.btntext,
									}}
								></div>
								<h3 className='text-center'>
									btntext: "#000000"
								</h3>
							</div>
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
