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
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #FD4370";
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {!loading ? (
        <div classname="App">
          <div
            style={{
              height: "30px",
              backgroundColor: "#FD4370",
              color: "white",
              fontFamily: "Poppins",
              textAlign: "center",
            }}
          >
            <p>This site is still under development.</p>
          </div>
          <Navbar />
          <div className="main_view">
            <Home />
            <RecentWork />
            <Skills />
            <About />
            <Timeline />
            <Projects />
            <Designs />
            <Contact />
          </div>
          <Footer />
        </div>
      ) : (
        <div className="loading">
          <RingLoader color={"#FD4370"} css={override} size={150}></RingLoader>
        </div>
      )}{" "}
    </>
  );
}

export default App;
