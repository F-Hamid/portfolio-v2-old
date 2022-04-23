import React from "react";

import "./../sass/pages/about.scss";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="me">
          <img
            className="me-img"
            src={require("./../images/aboutbckg-4.jpg")}
            alt="about image"
          />
        </div>
        <div className="about-me">
          <div className="about-text">
            <h1 className="about-text-heading "> FATEH Hamid</h1>
            <hr className="about-bar"></hr>
            <p className="about-text-p reveal">
              i am an ambitious <span>front-end developer</span>
              <br />
              my carrier is based on client satisfaction and professionnel
              relationship.
              <br />
              inspired by creativity and <span>perfection.</span>
            </p>
          </div>
          {/* <img
            className="realme"
            src={require("./../images/me3.png")}
            alt="about image"
          /> */}

          <div className="tech">
            <h1 className="tech-text reveal">MY ARSENAL :</h1>
            <img
              className="tech-img"
              src={require("./../images/tech1.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech11.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech10.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech13.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech6.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech7.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech8.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech9.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech5.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech2.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech3.png")}
              alt="about image"
            />
            <img
              className="tech-img"
              src={require("./../images/tech4.png")}
              alt="about image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
