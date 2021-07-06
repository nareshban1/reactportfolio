import React from "react";
import "./Designs.css"
import ModalImage from "react-modal-image";
import Masonry from "react-masonry-css";

function Designs({toggleState}) {

  const breakpointColumnsObj = {
        default: 2,
        700: 1,
  };
  
  return (
    <>
      <p className="skilltitle">
        I have been learning to make UI design and illustrations.
      </p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/trying poster.png"}
          large={process.env.PUBLIC_URL + "/poster.png"}
          alt="Astronaut poster"
        />
        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/CAR-01.png"}
          large={process.env.PUBLIC_URL + "/CAR-01.png"}
          alt="batman car"
        />
        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/MOON.png"}
          large={process.env.PUBLIC_URL + "/MOON.png"}
          alt="red moon"
        />

        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/EARTH.png"}
          large={process.env.PUBLIC_URL + "/EARTH.png"}
          alt="Earth"
        />
        <ModalImage
          className="designs "
          small={process.env.PUBLIC_URL + "/7star.png"}
          large={process.env.PUBLIC_URL + "/7star.png"}
          alt="7 Start Store logo Demo"
        />
        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/harry.png"}
          large={process.env.PUBLIC_URL + "/harry.png"}
          alt="Harry Potter"
        />

        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/batman.png"}
          large={process.env.PUBLIC_URL + "/batman.png"}
          alt="Batman Logo"
        />
        <ModalImage
          className="designs "
          small={process.env.PUBLIC_URL + "/royal logo.png"}
          large={process.env.PUBLIC_URL + "/royal logo.png"}
          alt="The Royal Boutique Logo"
        />
        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/RAMBO.png"}
          large={process.env.PUBLIC_URL + "/RAMBO.png"}
          alt="RAMBO"
        />
        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/astronaut.png"}
          large={process.env.PUBLIC_URL + "/astronaut.png"}
          alt="Astronaut"
        />

        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/fire-tutorial.png"}
          large={process.env.PUBLIC_URL + "/fire-tutorial.png"}
          alt="Asteroid"
        />
        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/LIGHT POLE.png"}
          large={process.env.PUBLIC_URL + "/LIGHT POLE.png"}
          alt="Race Car"
        />
        <ModalImage
          className="designs"
          small={process.env.PUBLIC_URL + "/racecar.png"}
          large={process.env.PUBLIC_URL + "/racecar.png"}
          alt="Race Car"
        />
      </Masonry>
    </>
  );
}

export default Designs;
