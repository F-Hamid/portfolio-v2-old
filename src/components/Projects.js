import "./../sass/pages/projects.scss";
import { v4 as uuidv4 } from "uuid";

import TechImg from "./layouts/TechImg";

const Projects = ({ projects }) => {
  const store = [...projects.projects];

  return (
    <>
      <section className="projects" id="projects">
        <div className="window-container container-1">
          <div className="window-blur"></div>
          <div className="window-1 window"></div>
        </div>
        <div className="window-container container-2">
          <div className="window-blur"></div>
          <div className="window-2 window"></div>
        </div>
        <div className="window-container container-3">
          <div className="window-blur"></div>
          <div className="window-3 window"></div>
        </div>

        <p className="presentation ">
          As a full-stack web developer, I bring a unique combination of
          technical expertise and creativity to every project I work on. I have
          a strong foundation in both front-end and back-end development, and
          have worked with various programming languages, frameworks, and
          libraries such as HTML, CSS, JavaScript, React, Node.js,
          Express,MongoDB... . <br />I am dedicated to creating user-friendly
          and responsive web applications that deliver a seamless user
          experience. I thrive on challenges and am always looking for new
          opportunities. My attention to detail, strong work ethic, and ability
          to work well within a team make me a valuable addition to any project.{" "}
          <br /> If you're looking for a skilled and motivated full-stack web
          developer to help bring your project to life, I am confident that my
          expertise and enthusiasm will make me the ideal candidate for the job.
        </p>
        <div className="header ">
          <h2 className="header-heading shine-text">Projects</h2>
          <hr className="header-bar" />
          <p className="header-text">
            My work reflects real life web applications, various skills and
            problem solving. To explore even more, check out the links below.
          </p>
        </div>
        <main className="projects-main">
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
                  key={uuidv4()}
                  className={`projects-box projects-box_${id} 
                  ${reveal}`}
                >
                  <div className="card-text">
                    <h2 className="card-text_heading">{name} </h2>
                    <p className="card-text_p">{description}</p>
                  </div>
                  <img className="projects-box-img" src={image} alt="Github" />

                  <div className="projects-box_after">
                    <a href={link} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-chrome"></i>
                    </a>
                    <a href={github_url} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github "></i>
                    </a>
                  </div>
                  <div className="projects-box_before">
                    <div className="stack-projects">{stack}</div>
                  </div>
                </div>
              );
            }
          )}
          <div className="tech-container">
            <TechImg />
          </div>
          <a className=" reveal more" href="/projects">
            <img
              className="more-img"
              src={require("./../images/cube1.png")}
              alt="cube2"
            />
            <h2 className="more-text">Explore More...</h2>
          </a>
        </main>
      </section>
    </>
  );
};

export default Projects;
