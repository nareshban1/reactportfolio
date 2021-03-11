import illustration from '../media/illustration.png'
import './components.css';
const Home= () => {
    return(
        <div className="intro" id="intro">
                <div className="titleview">
                    <p id="mtitle">Full Stack Developer, UI and UX enthusiast</p>
                    <p id="stitle">I love coding and it's thrilling to fix bugs and cry trying.</p>
                    <button className="abtbtn">About Me</button>
                </div>
                <div className="illustration">
                    <img id="main-image"src={illustration}></img>
                </div>
        </div>
    );
}

export default Home