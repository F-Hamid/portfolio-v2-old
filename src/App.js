import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/main.scss";
import { Home, Projects, About, Contact, AllProjects } from "./components";

function App() {
  const [load, setLoad] = useState(false);

  window.addEventListener("load", (event) => {
    if (event.isTrusted) {
      setLoad(true);
      console.log(event.isTrusted, load);
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
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default App;
