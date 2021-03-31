import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import Contact from "./components/Contact";
import { Link } from "react-scroll";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="loto">
            <a className="logo" href="/">
              NB
            </a>
            {showMenu ? (
              <span
                className="togglebtn"
                onClick={() => setShowMenu(!showMenu)}
              >
                <ImCross />
              </span>
            ) : (
              <span
                className="togglebtn"
                onClick={() => setShowMenu(!showMenu)}
              >
                <FaBars />
              </span>
            )}
          </div>

          <ul className={`${showMenu ? "navlinks active" : "navlinks"}`}>
            <li className="navitems">
              <Link
                className="item-links"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="navitems">
              <Link
                className="item-links"
                to="interest"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="navitems">
              <Link
                className="item-links"
                to="timeline"
                spy={true}
                smooth={true}
                duration={500}
              >
                Timeline
              </Link>
            </li>
            <li className="navitems">
              <Link
                className="item-links"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className={`${showMenu ? "btndiv activeb" : "btndiv"}`}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="button">Lets talk</button>
            </Link>
          </div>
        </nav>
      </header>
      <div className="main-view">
        <Home />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </div>
      <footer className="footer">
        <p className="foottext">Created by Naresh Ban &copy; 2021</p>
      </footer>
    </>
  );
}

export default App;
