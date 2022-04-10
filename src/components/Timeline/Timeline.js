import "./Timeline.css"
import { Reveal } from "react-reveal";
const Timeline = () => {
  return (
    <div className="timeline">

      <div className="container">
        <p className="timetitle">Timeline</p>
        <div className="timelinecontent">

          <div className="timelinecontainer left">
            <Reveal bottom>
              <div className="content">
                <p className="year">Jan 2022-Present</p>
                <p className="cert">Junior React Developer</p>
                <p className="name">InfoDevelopers</p>
                <p className="desc">
                  Currently working as a Junior React Developer in Infordevelopers.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="timelinecontainer rightt">
            <Reveal bottom>
              <div className="content">
                <p className="year">Jul 2021-Dec 2022</p>
                <p className="cert">Developer/UI Designer </p>
                <p className="name">Datafox</p>
                <p className="desc">
                  Worked on some freelance projects with friends using react as the main tech stack.
                </p>
              </div>
            </Reveal>
          </div>


          <div className="timelinecontainer left">
            <Reveal bottom>
              <div className="content cleft">
                <p className="year">Oct 2020-Jan 2022</p>
                <p className="cert">Team Captain</p>
                <p className="name">Cloudfactory</p>
                <p className="desc">
                  Worked part time as a team leader in cloudfactory.
                  I had the responsibility of managing the schedules,
                  communications and system issues and updates with my team and my
                  leads.
                </p>
              </div>
            </Reveal>
          </div>


          <div className="timelinecontainer rightt">
            <Reveal bottom>
              <div className="content">
                <p className="year">2017-2020</p>
                <p className="cert">
                  Bachelors in Computer Science and Information Technology{" "}
                </p>
                <p className="name">Herald College</p>
                <p className="desc">
                  I have completed my Bachelors on july 2020 with First class
                  certification from Herald college. Since the college was
                  affiliated to University of Wolverhampton, UK , I got to learn
                  various interesting courses and projects.
                </p>
              </div>
            </Reveal>
          </div>


          <div className="timelinecontainer left">
            <Reveal bottom>
              <div className="content cleft">
                <p className="year">2014-2016</p>
                <p className="cert">Higher secondary Education Board (+2 HSEB)</p>
                <p className="name">Khwopa Higher Secondary School</p>
                <p className="desc">
                  I completed my higher secondary education in science with first
                  division from this high school. I took a computer route so that I
                  can pursue a career in IT in the future.
                </p>
              </div>
            </Reveal>
          </div>



          <div className="timelinecontainer rightt">
            <Reveal bottom>
              <div className="content">
                <p className="year">2014</p>
                <p className="cert">School Leaving Certificate (SLC)</p>
                <p className="name">Manakamana English Secondary School</p>
                <p className="desc">
                  I completed my SLC with a distinction from Manakamana English
                  Secondary School. This is when I first learned HTML and CSS and
                  decided that I am going to learn Computer Science for my higher
                  education.{" "}
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Timeline;
