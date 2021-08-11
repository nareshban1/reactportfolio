import "./Home.css";
import { Link } from "react-scroll";
import Particles from "react-particles-js";
import Typed from 'react-typed';
const Home = () => {
  return (
    <div className="intro">
      <div className="container homeview">
        <div className="titleview">
          <p className="mtitle coloredtitle"> Front End Developer,</p>

          <Typed
            strings={["Occasional Gamer", "Backend Rookie","How you Doin'"]}
            typeSpeed={60}
            backSpeed={60}
            loop
            className="ttitle"
          />
          <p className="stitle">
            I love coding and it's thrilling to fix bugs or cry trying.
          </p>
          <Link
            to="interest"
            spy={true}
            smooth={true}
            duration={400}
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
