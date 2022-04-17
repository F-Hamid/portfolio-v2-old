import React from "react";
import HomeBackground from "./layouts/background";
import "./../sass/pages/home.scss";

const Home = () => {
  return (
    <section className="section">
      <HomeBackground />
      <h1>
        Hello <br></br>
        <h6> This is a text for exemple</h6>
      </h1>
    </section>
  );
};

export default Home;
