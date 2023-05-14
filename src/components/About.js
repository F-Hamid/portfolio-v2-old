import React from "react";
import { Link } from "react-router-dom";
import "./../sass/pages/about.scss";

const techImg = [
  1, 11, 10, 16, 6, 28, 23, 21, 22, 25, 24, 7, 8, 5, 3, 19, 4, 26, 27,
];

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-me">
          <div className="about-text">
            <h2 className="about-text-heading shine-text ">
              <p className="iam">Hello I am</p>
              Hamid
            </h2>

            <p
              className="about-text-p"
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              inspired by creativity and <span>perfection.</span>
              <br />
              passionate <span>Full Stack Web Developer.</span>
              <br />
              MY concern is <span>my client's client.</span>
              <br />
              My work is based on <span>client satisfaction</span> and
              professional relationship.
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
            <h2
              className="tech-text"
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              MY ARSENAL :
            </h2>

            {techImg.map((img) => {
              return (
                <img
                  key={img}
                  className={` tech-img tech${img}`}
                  src={require(`./../images/tech${img}.png`)}
                  alt="about "
                />
              );
            })}
          </div>
        </div>
        <div className="me">
          <img
            className="me-img"
            src={require("./../images/aboutbckg-4.jpg")}
            alt="about "
          />
        </div>
      </section>
    </>
  );
};

export default About;
