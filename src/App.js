import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Portofolio from './Components/Portofolio/Portofolio';
import Wave from "./Components/Intro/Wave"
import Header from "./Components/Header/Header"
import './App.css';
import { useContext } from "react";
import { themeContext } from "./Components/Toggle/Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#100F0F" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <>
      <Intro />
      <Wave />
      </>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Education />      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Experience />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Portofolio />      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Contact />
    </div>
  );
}

export default App;
