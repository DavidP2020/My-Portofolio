import React, { useContext } from "react";
import './Toggle.css'
import { themeContext } from "./Context";
const Toggle = () => {
  const theme = useContext(themeContext);
  const handleClick = () => {
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