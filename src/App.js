import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import RecentWork from "./components/RecentWork/RecentWork";
import Contact from "./components/Contact/Contact";
import React, { useState, useEffect } from "react";
import { SemipolarSpinner } from 'react-epic-spinners'
import ReactGA from 'react-ga';
ReactGA.initialize(`${process.env.REACT_APP_UA_ID}`); // add your tracking id here.


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <div classname="App">
          {/* <div
            style={{
              height: "30px",
              backgroundColor: "#FD4370",
              color: "white",
              fontFamily: "Poppins",
              textAlign: "center",
            }}
          >
            <p>Still in Development</p>
          </div> */}
          <Navbar />
          <div className="main_view">
            <Home />
            <RecentWork />
            <Skills />
            <About />
            <Timeline />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </div>
      ) : (
        <div className="loadingpage">
          <SemipolarSpinner color="#FD4370"></SemipolarSpinner>
        </div>
      )}{" "}
    </>
  );
}

export default App;
