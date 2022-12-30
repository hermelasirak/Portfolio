import React from "../assets/img/react2.svg";
import JavaScript from "../assets/img/javascript.svg";
import Node from "../assets/img/nodejs3.svg";
import HTML from "../assets/img/html.svg";
import CSS from "../assets/img/css.svg";
import MongoDB from "../assets/img/mongodb.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={Node} alt="Image9" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={HTML} alt="Image2" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={CSS} alt="Imag3" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={React} alt="Image4" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={JavaScript} alt="Image5" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={MongoDB} alt="Image6" />
                  <h5>MERN Stack</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image7" />
    </section>
  );
};
