import React from "react";
import "./RecentWork.css";
import { Zoom } from 'react-reveal'
function RecentWork() {
  return (
    <div className="recentwork">
      <Zoom>
        <div className="container recentcontainer">
          <div className="recentcontent">
            <p className="recenttitle">Featured Project</p>
            <p className="recent-projectname">AnimeSenpai</p>
            <p className="recent-projectdesc">
              A anime details and streaming app developed using ANIAPI and JIKAN API.
            </p>
            <a href="https://animesenpai.netlify.app" rel="noreferrer" target="_blank"><button className="recent-projectLink">Go to App</button></a>
          </div>
          <div className="recentImage ">
            <img src={process.env.PUBLIC_URL + "/animesenpai.png"} alt="" className="appimage mobile" />
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default RecentWork;
