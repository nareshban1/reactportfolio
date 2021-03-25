import illustration from '../media/illustration.png'
import './components.css';
const Home= () => {
    return(
        <div className="intro row" id="intro">
            <div className="columnm">
                <div className="titleview">
                    <p id="mtitle"> Full Stack Developer,UI and UX enthusiast</p>
                    <p id="stitle">I love coding and it's thrilling to fix bugs and cry trying.</p>
                    <a href="#skills"><button className="abtbtn" >My Skills</button></a>
                </div>
            </div> 
            <div className="columnm">
                <div className="illustration">
                    <img id="main-image"src={illustration} alt="Ilustration"></img>
                </div>
            </div> 

        </div>
    );
}

export default Home