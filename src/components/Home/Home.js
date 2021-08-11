import "./Home.css";
import { Link } from "react-scroll";
import Particles from "react-particles-js";
import Typist from 'react-typist';

const Home = () => {
  return (
    <div className="intro">
      <div className="container homeview">
        <div className="titleview">
          <p className="mtitle coloredtitle"> Front End Developer,</p>

          <Typist><span className="mtitle">Occasional Gamer</span>
          <Typist.Backspace count={16} delay={300} />
          <span className="mtitle" >Backend Rookie</span>
           </Typist>
          <p className="stitle">
            I love coding and it's thrilling to fix bugs or cry trying.
          </p>
          <Link
            className="item-links"
            to="interest"
            spy={true}
            smooth={true}
            duration={200}
          >
            <button className="abtbtn">My Skills</button>
          </Link>
        </div>

        <div className="illustration">
          <img id="main-image" src="" alt=""></img>
        </div>
        <Particles
          classname="particlesHome"
          params={{
            particles: {
              number: {
                value: 60,
              },
              size: {
                value: 2,
              },
              color: {
                value: ['#FD4370']
              },
              line_linked: {
                color: '#FD4370',
                opacity: 1
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Home;
