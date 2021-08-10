import "./Projects.css";

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
            <div className="appcontainer">
              <div className="appcontent">
                <p className="appname">Social Clone</p>
                <p className="appdesc">
                  A simple blog post app I implemented using React and Firebase.
                  You can post images, comments, follow other users and check
                  their profiles and more. I learned a lot about React doing
                  this project.
                </p>
                <a href="social-clone.netlify.app" target="_blank">
                  <button className="appLink">Go to App</button>
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
                <a href="https://reactcovidinfo.netlify.app" target="_blank">
                  <button className="appLink">Go to App</button>
                </a>
              </div>
            </div>
            <div className="appcontainer">
              <div className="appcontent">
                <p className="appname">CSTC Software Solutions</p>
                <p className="appdesc">
                  A demo webapp for CSTC software solutions to record their physical bills and save them online. Track subscription payments and reports.
                </p>
                <a href="https://github.com/nareshban1/CSTC" target="_blank">
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
                  A webapp I created as my college final year project that helps students in nepal to search for colleges. Also implemented with a sentiment analysis AI to analyze comments and rate the colleges.
                </p>
                <a href="https://github.com/nareshban1/CollegeFinder" target="_blank">
                  <button className="appLink">Go to Repo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
