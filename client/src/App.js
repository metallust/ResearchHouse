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
import GuideDashboard from "./components/guide/GuideDashboard";
import StudentSetup from "./components/student/StudentSetup";

import Textfield from "./videoCall/Init";
import Room from "./videoCall/Room";
import GuideSetup from "./components/guide/GuideSetup";
import CommitteeSetup from "./components/committee/CommitteeSetup";
import CommitteeDashboard from "./components/committee/CommitteeDashboard";
import Card1 from "./components/powerbi/Card1";
import IdeaModal from "./components/test/IdeaModal";

import Viewer from "./components/test/PDFviewer/Index";
import PgAnalytics from "./components/pgCoordinator/PgAnalytics";
import AddGuides from "./components/pgCoordinator/AddGuides";
import Timeline from './components/test/Timeline'

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
				<Route path='/card' element={<Card1 />} />
				<Route path='/studentsetup' element={<StudentSetup />} />
				<Route path='/guidesetup' element={<GuideSetup />} />
				<Route path='/committeesetup' element={<CommitteeSetup />} />
				<Route path='/ideamodal' element={<IdeaModal />} />

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
				<Route exact path='/guidedashboard' element={<GuideDashboard />}>
					<Route exact path='/guidedashboard/myprogress' element={<Colors />} />
				</Route>
				<Route exact path='/committeedashboard' element={<CommitteeDashboard />}></Route>
				<Route exact path='/pg' element={<PgCoordinatorDashboard />}>
					<Route exact path='/pg/addstudent' element={<AddStudent />} />
					<Route exact path='/pg' element={<PgAnalytics />} />
					<Route exact path='/pg/addguide' element={<AddGuides />} />
					<Route exact path='/pg/timeline' element={<Timeline />} />

				</Route>

				{/* Route required from video call */}
				<Route exact path='/videocall' element={<Textfield />} />
				<Route exact path='/room/:roomid' element={<Room />} />
				<Route exact path='/test3' element={<Viewer />} />

				{/* not found */}
				<Route path='*' element={<h1>404 Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
