const About = () => {
  return (
    <div className="abtback">
      <div className="about">
        <h2>Hello, I am Naresh</h2>
        <p className="abouttext">
          I have been interested in web designing for a long time. I just
          completed BSc CSIT (Hons) degree from Herald College, University of
          Wolverhampton. I am really curious about a lot of technologies and
          always try to learn and experience as much as I can. I am interested
          in front end development and am also starting to learn making
          illustrations and UI designs. I ocassionally enjoy gaming with my
          friends.
        </p>
        <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/Naresh.pdf"}>
          <button className="button-resume ">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default About;
