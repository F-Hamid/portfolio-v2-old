import React from "react";
import Navbar from "./layouts/Navbar";
import cube from "./../images/cube2.png";
import HomeBackground from "./layouts/Background";
import "./../sass/pages/home.scss";

const Home = () => {
  return (
    <section id="home" className="home">
      <HomeBackground />
      <nav className="home-nav">
        <Navbar />
      </nav>
      <img src={cube} className="home-cube" alt="cube" />
      <main className="home-main">
        <h3 className="home-text">
          A <span className="home-span">building</span> brick in your big
          project
        </h3>
        <h1 className="home-header">Your WEBSITE</h1>
        <h3 className="home-text">
          ...My big <span className="home-span">project</span>
        </h3>
        <a href="#about" className="cta   typewriter ">
          <h1>your Professional Web Developer</h1>
          <div className="arrows"></div>
        </a>
      </main>
    </section>
  );
};

export default Home;
