import React from "react";
import Navbar from "./layouts/Navbar";
import cube from "./../images/cube2.png";
import HomeBackground from "./layouts/Background";
import "./../sass/pages/home.scss";

const Home = () => {
  return (
    <section className="home">
      <HomeBackground />
      <nav className="home-nav">
        <Navbar />
      </nav>
      <img src={cube} className="home-cube" alt="cube" />
      <main className="home-main">
        <h3 className="home-text">
          A building <span className="home-span">brick</span> in your big
          project
        </h3>
        <h1 className="home-header">Your WEBSITE</h1>
        <h3 className="home-text">
          {" "}
          ...My big <span className="home-span">project</span>.
        </h3>
      </main>
    </section>
  );
};

export default Home;
