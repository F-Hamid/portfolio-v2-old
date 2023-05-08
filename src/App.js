// import React, { useEffect } from "react";
import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "./sass/main.scss";
import { Resume } from "./components";
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
const LazyServices = lazy(() => import("./components/Services"));

// App

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  // LOADING

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
      <div className="mini-menu">
        <i class="fa-solid fa-arrows-turn-to-dots mini-menu-arrow"></i>

        <a className="fa-menu" href="#home">
          <i className="fa-solid fa-house-circle-check mini-menu-item"></i>
        </a>

        <a className="fa-menu" href="#contact">
          <i class="fa-solid fa-address-book mini-menu-item"></i>
        </a>

        <a className="mini-menu-container" href="#home">
          <i class="fa-solid fa-at mini-menu-item"></i>
        </a>
      </div>
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
                  {/* <LazyTestim2 /> */}
                  {/* <LazyTestim /> */}
                  <LazyServices />
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
