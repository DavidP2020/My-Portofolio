import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Education from './Components/Education/Education';
import Skill from './Components/Skill/Skill';
import Contact from './Components/Contact/Contact';
import Portofolio from './Components/Portofolio/Portofolio';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/ScrollUp/Scrollup';
import Certificate from './Components/Certificate/Certificate';
// import Wave from "./Components/Intro/Wave"
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
        background: darkMode ? "#100F0F" : "var(--E2DCC8)",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <>
        <Intro />
        {/* <Wave /> */}
      </>
      <Education />
      <Skill />
      <Portofolio />
      <Certificate />
      <Contact />
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
