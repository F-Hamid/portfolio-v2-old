import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./sass/main.scss";
import {
  Home,
  Projects,
  About,
  Contact,
  AllProjects,
  Resume,
  Testimonials,
} from "./components";

function App() {
  // Animation
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = -30;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  // LOADING
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 1500);

  // useEffect(() => {
  //   window.addEventListener("load", (event) => {
  //     setLoad(false);
  //     console.log("Ready!");
  //   });
  // }, [load]);

  return load ? (
    <div className="spinner">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <>
      <BrowserRouter>
        <Helmet>
          <title>
            Professional Web Developer | Make your Business Standout.
          </title>
          <meta
            name="description"
            content="Full Stuck Web Developer to help you get the perfect creative custom Website."
          />
          <meta
            name="keywords"
            content="Website, Fateh Hamid,Website Designer, Website Developer, Website ideas, Full stuck web developer, Front end developer , Back end developer, User Interface, User experience"
          />
        </Helmet>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Projects />
                <About />
                <Testimonials />
                <Contact />
              </>
            }
          ></Route>
          <Route path="/projects" element={<AllProjects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
