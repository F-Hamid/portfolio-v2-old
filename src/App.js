import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/main.scss";
import { Home, Projects, About, Contact, AllProjects } from "./components";

function App() {
  // Animation
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 10;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  // LOADING
  const [load, setLoad] = useState(false);

  window.addEventListener("load", (event) => {
    if (event.target.readyState === "complete") {
      setLoad(true);
      console.log(event.target.readyState);
    }
  });
  return load ? (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Projects />
                <About />
                <Contact />
              </>
            }
          ></Route>
          <Route path="/projects" element={<AllProjects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  ) : (
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
  );
}

export default App;
