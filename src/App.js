import React from "react";
import "./sass/main.scss";
import { Home, Projects, About, Contact } from "./components";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <>
      <AllProjects />
      {/* <Home /> */}
      {/* <Projects /> */}
      {/* <About />
      <Contact /> */}
    </>
  );
}

export default App;
