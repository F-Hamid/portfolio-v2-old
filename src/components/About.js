import React from "react";
import { Link } from "react-router-dom";
import "./../sass/pages/about.scss";

const techImg = [1, 11, 10, 16, 6, 21, 23, 22, 25, 24, 7, 8, 5, 3, 19, 4, 26];

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="me">
          <img
            className="me-img"
            src={require("./../images/aboutbckg-4.jpg")}
            alt="about "
          />
        </div>
        <div className="about-me">
          <div className="about-text">
            <h1 className="about-text-heading "> FATEH Hamid</h1>
            <hr className="about-bar"></hr>
            <p className="about-text-p reveal">
              ambitious <span>Full Stack Web Developer.</span>
              <br />
              My work is based on <span>client satisfaction</span> and
              professional relationship.
              <br />
              inspired by creativity and <span>perfection.</span>
            </p>
          </div>
          <div className="btn-container">
            <button type="button" className="btn btn-info">
              <Link to="/resume">Resume</Link>
            </button>
            <div className="container">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
          </div>

          <div className="tech">
            <h1 className="tech-text reveal">MY ARSENAL :</h1>

            {techImg.map((img) => {
              return (
                <img
                  key={img}
                  className="tech-img"
                  src={require(`./../images/tech${img}.png`)}
                  alt="about "
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
