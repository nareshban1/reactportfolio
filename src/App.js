import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import RecentWork from "./components/RecentWork/RecentWork";
import Designs from "./components/Designs/Designs";
import Contact from "./components/Contact/Contact";



function App() {
    return(
      <div classname="App">
      <div style={{height:"30px" ,backgroundColor:"#FD4370", color:"white" ,fontFamily:"Poppins" , textAlign:"center"}}>
        <p>This site is still under development.</p>
      </div>
      <Navbar/>
      <div className="main_view">
        <Home />
        <RecentWork/>
        <Skills/>
        <About/>
        <Timeline/>
        <Projects/>
        <Designs/>
        <Contact/>
      </div>
      <Footer/>
      </div>
    )
}

export default App;
