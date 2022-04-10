import "./Projects.css";
import { Reveal } from "react-reveal";

const Projects = () => {
  return (
    <div className="projects">
      <div className="myProjects container">
        <p className="projtitle">My Projects</p>

        <div className="pcontent">
          <p className="skilltitle">
            Here are some of the apps I have developed.
          </p>
          <div className="applist">
            <Reveal right>
              <div className="appcontainer">
                <div className="appcontent">
                  <p className="appname">Universal Travels And Tours Website</p>
                  <p className="appdesc">
                    Developed a website for the Universal Travels and Tours From Designing, Frontend and Backend. Used React For Frontend and Django as Backend.
                  </p>
                  <a
                    href="https://utt.com.np"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="appLink">Go to Site</button>
                  </a>
                </div>
                <div className="appImage ">
                  <img
                    src={process.env.PUBLIC_URL + "/utt.png"}
                    alt=""
                    className="appimageview mobile"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal left>
              <div className="appcontainer">
                <div className="appImage ">
                  <img
                    src={process.env.PUBLIC_URL + "/moneytrack.png"}
                    alt=""
                    className="appimageview mobile"
                  />
                </div>
                <div className="appcontent">
                  <p className="appname">Money Tracker</p>
                  <p className="appdesc">
                    A income and expense tracker app using Firebase and react.
                  </p>
                  <a
                    href="https://yourmoneytracker.netlify.app"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="appLink">Go to Site</button>
                  </a>
                </div>

              </div>
            </Reveal>
            <Reveal right>
              <div className="appcontainer">
                <div className="appcontent">
                  <p className="appname">AnimeSenpai</p>
                  <p className="appdesc">
                    A anime details and streaming app developed using ANIAPI and
                    JIKAN API.
                  </p>
                  <a
                    href="https://animesenpai.netlify.app"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="appLink">Go to Site</button>
                  </a>
                </div>
                <div className="appImage ">
                  <img
                    src={process.env.PUBLIC_URL + "/animesenpai.png"}
                    alt=""
                    className="appimageview mobile"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal left>
              <div className="appcontainer">
                <div className="appImage ">
                  <img
                    src={process.env.PUBLIC_URL + "/weatherguru.png"}
                    alt=""
                    className="appimageview mobile"
                  />
                </div>
                <div className="appcontent">
                  <p className="appname">Weather.Guru</p>
                  <p className="appdesc">
                    A weather app to check current weather with hourly and daily
                    forecast of any location. Used open weather api.
                  </p>
                  <a
                    href="https://weatherguru.netlify.app"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="appLink">Go to Site</button>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal right>
              <div className="appcontainer">
                <div className="appcontent">
                  <p className="appname">Social Clone</p>
                  <p className="appdesc">
                    A simple blog post app I implemented using React and
                    Firebase. You can post images, comments, follow other users
                    and check their profiles and more. I learned a lot about
                    React doing this project.
                  </p>
                  <a
                    href="https://social-clone.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="appLink">Go to Site</button>
                  </a>
                </div>
                <div className="appImage ">
                  <img
                    src={process.env.PUBLIC_URL + "/socialClone.png"}
                    alt=""
                    className="appimageview mobile"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal left>
              <div className="appcontainer">
                <div className="appImage ">
                  <img
                    src={process.env.PUBLIC_URL + "/covid.png"}
                    alt=""
                    className="appimageview mobile"
                  />
                </div>
                <div className="appcontent">
                  <p className="appname">Covid Info</p>
                  <p className="appdesc">
                    A simple covid info app I developed using react, disease.sh
                    api and chart.js library.
                  </p>
                  <a
                    href="https://reactcovidinfo.netlify.app"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="appLink">Go to Site</button>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal right>
              <div className="appcontainer">
                <div className="appcontent">
                  <p className="appname">CSTC Software Solutions</p>
                  <p className="appdesc">
                    A demo webapp for CSTC software solutions to record their
                    physical bills and save them online. Track subscription
                    payments and reports.
                  </p>
                  <a
                    href="https://github.com/nareshban1/CSTC"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="appLink">Go to Repo</button>
                  </a>
                </div>
                <div className="appImage ">
                  <img
                    src={process.env.PUBLIC_URL + "/CSTC.png"}
                    alt=""
                    className="appimageview mobile"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal left>
              <div className="appcontainer">
                <div className="appImage ">
                  <img
                    src={process.env.PUBLIC_URL + "/CollegeFinder.png"}
                    alt=""
                    className="appimageview mobile"
                  />
                </div>
                <div className="appcontent">
                  <p className="appname">College Finder</p>
                  <p className="appdesc">
                    A webapp I created as my college final year project that
                    helps students in nepal to search for colleges. Also
                    implemented with a sentiment analysis AI to analyze comments
                    and rate the colleges.
                  </p>
                  <a
                    href="https://github.com/nareshban1/CollegeFinder"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="appLink">Go to Repo</button>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
