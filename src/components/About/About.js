import "./About.css"

const About = () => {
  return (
    <div className="abtback">
      <div className="about container">
        <div className="aboutme">
        <h2>Hello, I am Naresh</h2>
        <p className="abouttext">
          I am a front-end developer. I just
          completed BSc CSIT (Hons) degree from Herald College, University of
          Wolverhampton. I am really curious about a lot of technologies and
          always try to learn and experience as much as I can. I am also starting to learn making
          illustrations and UI designs. I ocassionally enjoy gaming with my
          friends.
        </p>
        <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/Naresh.pdf"}>
          <button className="button-resume ">Download Resume</button>
        </a>
        </div>
        <div className="about_image">
          <img  className="myProfile" src={process.env.PUBLIC_URL + "/naresh.png"} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default About;
