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

        <p
          className="presentation "
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <span className="projects-header">
            Your Digital Future Starts Here
          </span>
          <br /> Don't let your online presence lag behind. Partner with me, and
          let my web development expertise elevate your digital future. Contact
          me today to discuss your project, and let's embark on a journey to
          create a remarkable online identity that sets you apart in the digital
          landscape.
          <br /> Your success is my mission. <br /> In today's fast-paced
          digital world, slow-loading websites are a turn-off for visitors. My
          web developers optimize website speed, using efficient coding
          practices and performance-enhancing techniques, giving your users a
          seamless and enjoyable browsing experience with stunning user interface.
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
                  `}
                  data-aos={reveal}
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1500"
                  data-aos-delay="200"
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
          <a
            className=" more"
            href="/projects"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
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
