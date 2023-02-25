import React from "react";
import { Helmet } from "react-helmet";
import "./../sass/pages/all-projects.scss";
import Contact from "./Contact";

const AllProjects = ({ allProjects }) => {
  let store = [...allProjects.projects, ...allProjects.allProjects];
  console.log(allProjects);
  return (
    <>
      <section className="allProjects ">
        <Helmet>
          <title> Hamid-Web | My Projects </title>
          <meta
            name="description"
            content="Projects: Professional Web Developer  and Designer."
          />
          <meta
            name="keywords"
            content="Website, Fateh Hamid,Website Designer, Website Developer, Website ideas, Full stuck web developer, Front end developer , Back end developer, User Interface, User experience"
          />
        </Helmet>

        <a href="/" className="back-home">
          <i className="fa-solid fa-house-laptop"></i>
        </a>
        <div className="header ">
          <h1 className="header-heading">Projects</h1>
          <hr className="header-bar" />
          <p className="header-text">
            Explore some of my work: Real world projects,skills, and problem
            solving.
          </p>
        </div>
        <main className="allProjects-main">
          {store.map(
            ({
              description,
              id,
              github_url,
              name,
              link,
              image,
              reveal,
              stack,
            }) => {
              return (
                <div
                  key={id}
                  className={`allProjects-box allProjects-box_${id} ${reveal}`}
                >
                  <div className="card-text">
                    <h1 className="card-text_heading">{name} </h1>
                    <p className="card-text_p">{description}</p>
                  </div>
                  <img
                    className="allProjects-box-img"
                    src={image}
                    alt="Github"
                  />

                  <div className="allProjects-box_after">
                    <a href={link} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-chrome"></i>
                    </a>
                    <a href={github_url} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                  <div className="allProjects-box_before">
                    <div className="stack">{stack}</div>
                  </div>
                </div>
              );
            }
          )}
        </main>
        <Contact />
      </section>
    </>
  );
};

export default AllProjects;
