import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="intro">
      <div className="container homeview">
      <div className="titleview">
        <p className="mtitle coloredtitle"> Front End Developer,</p>
        <p className="mtitle">UI and illustrations enthusiast</p>
        <p className="stitle">
          I love coding and it's thrilling to fix bugs and cry trying.
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
        <img
          id="main-image"
          src=""
          alt=""
        ></img>
      </div>
      </div>
    </div>
  );
};

export default Home;
