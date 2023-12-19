import ThemeState from "./Context/ThemeState";
import LoginPage from "./components/Loginpage";
import Signup from "./components/Signuppage";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import { useContext, useRef } from "react";
import ThemeContext from "./Context/ThemeContext";
import DomainSelection from "./components/student/DomainSelection";
import Todo from "./components/Todo";
import Colors from "./components/Colors";
// import Pdf from "./components/test/Pdf";
import Main from "./components/test/Index";
import Flow from "./components/test2/Index";
import StudentDashboard from "./components/student/StudentDashboard";
import AddStudent from "./components/pgCoordinator/AddStudent";
import PgCoordinatorDashboard from "./components/pgCoordinator/Index";

import Editor from "./components/TimelineEditor/Index";

import Textfield from "./videoCall/Init";
import Room from "./videoCall/Room";

function App() {
	const { theme, changeTheme } = useContext(ThemeContext);
	console.log(theme);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/addstudent' element={<AddStudent />} />
				<Route path='/' element={<LandingPage />} />
				<Route path='/domain' element={<DomainSelection />} />
				<Route path='/Home' element={<Dashboard />} />
				<Route path='/test' element={<Main />} />
				<Route path='/test2' element={<Flow />} />

				<Route path='/editor' element={<Editor />} />
				<Route
					path='/todo'
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
				<Route exact path='/studentdashboard' element={<StudentDashboard />}>
					<Route exact path='/studentdashboard/myprogress' element={<Colors />} />
				</Route>
				<Route exact path='/pg' element={<PgCoordinatorDashboard />}>
					{/* <Route
						exact
						path='/pgcoordinatordashboard/myprogress'
						element={<Colors />}
					/> */}
				</Route>

				{/* Route required from video call */}

				<Route exact path='/videocall' element={<Textfield />} />
				<Route exact path='/room/:roomid' element={<Room />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
