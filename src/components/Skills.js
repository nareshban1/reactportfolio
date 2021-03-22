import { FaHtml5,FaCss3Alt,FaReact,FaBootstrap,FaGitAlt} from 'react-icons/fa';
import { SiDjango,SiJavascript,SiAdobeillustrator,SiAdobexd } from 'react-icons/si'


const Skills= () => {
    return(
        <div className="skills" id="skills">
            <p className="skill" >Skills</p>
            <p className="skilltitle">
                Here are some of the skillset I have acquired.
            </p>

            <div className="skilllist">
                <div className="skillcard">
                    <span className="cardlogo html"><FaHtml5/></span>
                    <p className="cardtitle">HTML</p>
                    <p className="level">Intermediate</p>
                </div>
                <div className="skillcard">
                    <span className="cardlogo css"><FaCss3Alt/></span>
                    <p className="cardtitle">CSS</p>
                    <p className="level">Intermediate</p>
                </div>
                <div className="skillcard">
                    <span className="cardlogo boot"><FaBootstrap/></span>
                    <p className="cardtitle">Bootstrap</p>
                    <p className="level">Intermediate</p>
                </div>
                <div className="skillcard">
                    <span className="cardlogo django"><SiDjango/></span>
                    <p className="cardtitle">Django</p>
                    <p className="level">Intermediate</p>
                </div>
                <div className="skillcard">
                    <span className="cardlogo javascript"><SiJavascript/></span>
                    <p className="cardtitle">Javascript</p>
                    <p className="level">Intermediate</p>
                </div>
                <div className="skillcard">
                    <span className="cardlogo react"><FaReact/></span>
                    <p className="cardtitle">React</p>
                    <p className="level">Basic</p>
                </div>
                <div className="skillcard">
                    <span className="cardlogo git"><FaGitAlt/></span>
                    <p className="cardtitle">GIT</p>
                    <p className="level">Basic</p>
                </div>
                <div className="skillcard">
                    <span className="cardlogo ai"><SiAdobeillustrator/></span>
                    <p className="cardtitle">Illustration</p>
                    <p className="level">Beginner</p>
                </div>
                <div className="skillcard">
                    <span className="cardlogo xd"><SiAdobexd/></span>
                    <p className="cardtitle">Adobe XD</p>
                    <p className="level">Beginner</p>
                </div>
  
            </div>

        </div>
    );
}

export default Skills