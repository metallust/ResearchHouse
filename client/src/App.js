import ThemeState from "./Context/ThemeState";
import LoginPage from "./components/Loginpage";
import Navbar from "./components/Navbar";
//import Navbar from "./components/Navbar";


function App() {
  return (
    <ThemeState >
       <Navbar />    
    </ThemeState>
  );
}

export default App;
