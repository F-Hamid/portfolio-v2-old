import React from "react";
import Navbar from "./layouts/Navbar";
import cube from "./../images/cube2.png";

import HomeBackground from "./layouts/Background";
import "./../sass/pages/home.scss";

const Home = () => {
  return (
    <section className="section">
      <HomeBackground />

      <Navbar />
      <img src={cube} className="cube" alt="cube" />
      <main>
        <h3>
          A buildiong <span>brick</span> in your big project
        </h3>
        <h1>Your WEBSITE</h1>
        <h3>
          {" "}
          ...My big <span>project</span>.
        </h3>
      </main>
    </section>
  );
};

export default Home;
