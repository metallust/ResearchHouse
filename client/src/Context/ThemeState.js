import ThemeContext from "./ThemeContext";
import { useState } from "react";

const ThemeState = (props) => {
  const host = "http://localhost:5000";

  const light ={
    name: "light",
    primary: "#1b2d48",
    secondary: "#2c456b",
    tertiary: "#3c649f",
    quaternary:"#83aff0",
    black : "#000000",
    white : "#ffffff",
    btn : "#ff9900",
    btntext: "#000000",
  }

  
  const dark = {
    name: "dark",
    primary: "#181818",
    secondary: "#313131",
    tertiary: "#313131",
    quaternary:"#818181",
    black : "#000000",
    white : "#ffffff",
    btn : "#ff9900",
    btntext: "#000000",
  };
  const [theme, setTheme] = useState(dark);

  // Add a note
  const changeTheme =async () => {
    if (theme.name === "dark" ){
        setTheme(light)
    }
    else{
        setTheme(dark)
    }
  };

  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
  };

export default ThemeState;
