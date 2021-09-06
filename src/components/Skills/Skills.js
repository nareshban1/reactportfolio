import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobexd,
} from "react-icons/si";

import "./Skills.css";
import { Reveal } from "react-reveal";

const skillsArr = [
  { name: "HTML", level: "Intermediate", icon: <FaHtml5 />, class: "html" },
  { name: "CSS", level: "Intermediate", icon: <FaCss3Alt />, class: "css" },
  {
    name: "Bootstrap",
    level: "Intermediate",
    icon: <FaBootstrap />,
    class: "boot",
  },
  {
    name: "Javascript",
    level: "Basic",
    icon: <SiJavascript />,
    class: "javascript",
  },
  { name: "React", level: "Basic", icon: <FaReact />, class: "react" },
  { name: "GIT", level: "Basic", icon: <FaGitAlt />, class: "git" },
  { name: "Django", level: "Basic", icon: <SiDjango />, class: "django" },
  {
    name: "Illustration",
    level: "Beginner",
    icon: <SiAdobeillustrator />,
    class: "ai",
  },
  { name: "Adobe XD", level: "Beginner", icon: <SiAdobexd />, class: "xd" },
];
const Skills = () => {
  return (
    <div className="interest">
      <div className="container myskills">
        <p className="skill">Skills</p>
        <p className="skilltitle">
          Here are some of the skillset I have acquired.
        </p>

        <div className="skilllist">
          {skillsArr.map((item) => (
            <Reveal right >
              <div className="skillcard" key={item.class}>
                <span className={`cardlogo ${item.class}`}>{item.icon}</span>
                <p className="cardtitle">{item.name}</p>
                <p className="level">{item.level}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
