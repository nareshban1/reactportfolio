import React from "react";
import "./RecentWork.css";

function RecentWork() {
  return (
    <div className="recentwork">
      <div className="container recentcontainer">
        <div className="recentcontent">
          <p className="recenttitle">Featured Project</p>
          <p className="recent-projectname">Social Clone</p>
          <p className="recent-projectdesc">
            A simple blog post app I implemented using React and Firebase. You
            can post images, comments, follow other users and check their
            profiles and more. I learned a lot about React doing this project.
          </p>
          <a href="https://social-clone.netlify.app/" target="_blank"><button className="recent-projectLink">Go to App</button></a>
        </div>
        <div className="recentImage ">
          <img src={process.env.PUBLIC_URL + "/socialClone.png"} alt="" className="appimage mobile" />
        </div>
      </div>
    </div>
  );
}

export default RecentWork;
