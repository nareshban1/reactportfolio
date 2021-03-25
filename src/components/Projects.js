import './components.css';
import { useState } from 'react';
import ModalImage from "react-modal-image";


const Projects= () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <div className="projects" id="projects">
            <p className="projtitle">My Projects</p>
            <div className="maintab">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                    Apps
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                    Illustrations and Designs
                    </button>
                </div>

                <div className="content-tabs">
                <div className={toggleState === 1 ? "pcontent  active-content" : "pcontent"}>
                    <p className="skilltitle">
                        Here are some of the apps I have developed.
                    </p>
                    <div className="applist">
                        <div className="appcard">
                            <img src='https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/09/bUcvrRc-1-796x398.jpg' alt="projectimage">
                            </img>
                            <div className="appcontent">
                                <p className="apptitle">College Finder</p>
                                <p className="appdesc">Final year project for searching and  rating colleges using AI. </p>
                                <div className="appres">
                                    <ul>
                                        <li className="ares">HTML</li>
                                        <li className="ares">CSS</li>
                                        <li className="ares">Bootstrap</li>
                                        <li className="ares">Javascript</li>
                                        <li className="ares">Django</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="appcard">
                            <img src='https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/09/bUcvrRc-1-796x398.jpg'  alt="projectimage">
                            </img>
                            <div className="appcontent">
                                <p className="apptitle">CSTC Software Solutions</p>
                                <p className="appdesc">Demo bill recording web app for CSTC Software Solutions.</p>
                                <div className="appres">
                                    <ul>
                                        <li className="ares">HTML</li>
                                        <li className="ares">CSS</li>
                                        <li className="ares">Bootstrap</li>
                                        <li className="ares">Javascript</li>
                                        <li className="ares">Django</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="appcard">
                            <img src='https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/09/bUcvrRc-1-796x398.jpg'  alt="projectimage">
                            </img>
                            <div className="appcontent">
                                <p className="apptitle">Movie Snob</p>
                                <p className="appdesc">Movie Details Android App using TMDB Api.</p>
                                <div className="appres">
                                    <ul>
                                        <li className="ares">Android</li>
                                        <li className="ares">TMDB API</li>
                                        <li className="ares">Java</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                     
                       
                        
                        
                    </div>
                </div>

                <div className={toggleState === 2 ? "pcontent  active-content" : "pcontent"}>
                    <p className="skilltitle">
                        I have been learning to make illustrations.
                    </p>
                    <p className="grptitle">
                        
                        Illustrations
                    </p>
                    <hr></hr>
                    
                    <div className="row">
                    
                        <div className="column">
                            <ModalImage className="designs" small={process.env.PUBLIC_URL + '/astronaut.png'} large={process.env.PUBLIC_URL + '/astronaut.png'} alt="Astronaut"/>
                            <ModalImage className="designs" small={process.env.PUBLIC_URL + '/EARTH.png'} large={process.env.PUBLIC_URL + '/EARTH.png'} alt="Earth"/>
                            <ModalImage className="designs" small={process.env.PUBLIC_URL + '/racecar.png'} large={process.env.PUBLIC_URL + '/racecar.png'} alt="Race Car"/>
                            <ModalImage className="designs" small={process.env.PUBLIC_URL + '/RAMBO.png'} large={process.env.PUBLIC_URL + '/RAMBO.png'} alt="RAMBO"/>

                        </div>
                        <div className="column">
                            <ModalImage className="designs" small={process.env.PUBLIC_URL + '/fire-tutorial.png'} large={process.env.PUBLIC_URL + '/fire-tutorial.png'} alt="Asteroid"/>
                            <ModalImage className="designs" small={process.env.PUBLIC_URL + '/harry.png'} large={process.env.PUBLIC_URL + '/harry.png'} alt="Harry Potter"/>
                            <ModalImage className="designs" small={process.env.PUBLIC_URL + '/batman.png'} large={process.env.PUBLIC_URL + '/batman.png'} alt="Batman Logo"/>
                        </div>
                        
                    </div>
                    
                    <p className="grptitle">
                        Logo Designs
                    </p>
                    <hr></hr>
                    <div className="row">
                        <div className="column">
                            <ModalImage className="designs logo" small={process.env.PUBLIC_URL + '/7star.png'} large={process.env.PUBLIC_URL + '/7star.png'} alt="Demo 7 Start Store logo"/>

                        </div>
                        <div className="column">
                            <ModalImage className="designs logo" small={process.env.PUBLIC_URL + '/royal logo.png'} large={process.env.PUBLIC_URL + '/royal logo.png'} alt="The Royal Boutique Logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects