import React from "react";
import "./Footer.css";

import {ImLinkedin,ImGithub} from "react-icons/im"
function Footer() {
  return (
    <footer className="footer">
      <div className="socialicons">
      <a
        href="https://github.com/nareshban1"
        target="_blank"
        rel="noreferrer"
      >
          <ImGithub className="socialicon"/>
          </a> <a
        href="https://www.linkedin.com/in/naresh-ban-810b691a2/"
        target="_blank"
        rel="noreferrer"
      >
          <ImLinkedin className="socialicon"/>
          </a>
        </div>
      
      <a
        href="http://nareshban.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
        className="olddesign"
      >
        Old Design Portfolio
      </a>
      <p className="foottext">Created by Naresh Ban &copy; 2021 </p>
    </footer>
  );
}

export default Footer;
