import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/main.scss";
import { Home, Projects, About, Contact, AllProjects } from "./components";

function App() {
  return (
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
  );
}

export default App;
