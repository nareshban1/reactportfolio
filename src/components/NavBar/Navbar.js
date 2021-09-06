import React from 'react'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

import { Link } from "react-scroll";
import "./Navbar.css"

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <div className="logosmall">
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
                onClick={() => setShowMenu(!showMenu)}
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
                duration={600}
                onClick={() => setShowMenu(!showMenu)}
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
                duration={700}
                onClick={() => setShowMenu(!showMenu)}
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
                duration={800}
                onClick={() => setShowMenu(!showMenu)}
              >
                Projects
              </Link>
              </li>
              {/* <li className="navitems">
              <Link
                className="item-links"
                to="illustrations"
                spy={true}
                smooth={true}
                duration={900}
                onClick={() => setShowMenu(!showMenu)}
              >
                Illustrations
              </Link>
              <Link
              to="contacts"
              spy={true}
              smooth={true}
              duration={1000}
              className="smallscreenbtn"
              onClick={() => setShowMenu(!showMenu)}
            >
              <button className="button1">Lets talk</button>
            </Link>
            </li> */}
          </ul>
          <div className={`${showMenu ? "btndiv activeb" : "btndiv"}`}>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(!showMenu)}
            >
              <button className="button">Lets talk</button>
            </Link>
          </div>
        </nav>
      </header>
      
    </>
  );
}

export default Navbar
