import "./components.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="intro row" id="intro">
      <div className="columnm">
        <div className="titleview">
          <p id="mtitle"> Full Stack Developer,UI and UX enthusiast</p>
          <p id="stitle">
            I love coding and it's thrilling to fix bugs and cry trying.
          </p>
          <Link
                className="item-links"
                to="skills"
                spy={true}
                smooth={true}
                duration={200}
              >
            <button className="abtbtn">My Skills</button>
            </Link>
        </div>
      </div>
      <div className="columnm">
        <div className="illustration">
          <img id="main-image" src={process.env.PUBLIC_URL + "/illustration.png"}alt="Ilustration"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
