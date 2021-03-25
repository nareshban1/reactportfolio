import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import Contact from './components/Contact';

function App() {


const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="header">
            <nav className="navbar">
                <div className="loto">
                    <a className="logo" href="/">NB</a>
                    {showMenu?
                      <span className="togglebtn" onClick={()=> setShowMenu(!showMenu)}><ImCross/></span>
                      :<span className="togglebtn" onClick={()=> setShowMenu(!showMenu)}><FaBars/></span>}
                    
                </div>
                
               
                <ul className={`${showMenu?'navlinks active':'navlinks'}`}>
                    <li className="navitems"><a className="item-links" href="#about">About</a></li>
                    <li className="navitems"><a className="item-links" href="#skills">Skills</a></li>
                    <li className="navitems"><a className="item-links" href="#timeline">Timeline</a></li>
                    <li className="navitems"><a className="item-links" href="#projects">Projects</a></li>
                </ul>
                <div className={`${showMenu?'btndiv activeb':'btndiv'}`}>
                <a  href="#contact"><button className="button">Lets talk</button></a>
                </div>
                     
            </nav>
        </header>
      <div className="main-view">
        <Home />
        <About />
        <Skills/>
        <Timeline/>
        <Projects/>
        <Contact/>
      </div>

    </>
  );
}

export default App;
