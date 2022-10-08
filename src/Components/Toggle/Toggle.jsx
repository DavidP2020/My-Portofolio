import React, { useContext } from "react";
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from "./Context";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <>
      <label className="toggle">
        <input type="checkbox"
          onClick={(e) => handleClick(e)}
        />
        <span className="slider round"></span>
      </label>
    </>
  )
}

export default Toggle