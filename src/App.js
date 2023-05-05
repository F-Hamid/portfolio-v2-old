// import React, { useEffect } from "react";
import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./sass/main.scss";
import {
  // Home,
  // Projects,
  // About,
  // Contact,
  // AllProjects,
  // Testimonials,
  Resume,
} from "./components";
import Loader from "./components/layouts/Loader";
import gallery from "./components/utils/Gallery";

// Lazy Loading

const LazyHome = lazy(() => import("./components/Home.js"));
const LazyProjects = lazy(() => import("./components/Projects.js"));
const LazyAbout = lazy(() => import("./components/About.js"));
const LazyTestim = lazy(() => import("../src/components/layouts/Testimonials"));
const LazyTestim2 = lazy(() => import("./components/Testimonials.js"));
const LazyContact = lazy(() => import("./components/Contact.js"));
const LazyAllProjects = lazy(() => import("./components/AllProjects.js"));

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
  //   });
  // }, [load]);

  return load ? (
    <Loader />
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
                <Suspense fallback={<Loader />}>
                  <LazyHome />
                  <LazyProjects projects={gallery} />
                  <LazyAbout />
                  <LazyTestim2 />
                  <LazyTestim />
                  <LazyContact />
                </Suspense>
              </>
            }
          ></Route>
          <Route
            path="/projects"
            element={<LazyAllProjects allProjects={gallery} />}
          ></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
