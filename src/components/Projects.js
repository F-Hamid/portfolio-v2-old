import React from "react";
import { Link } from "react-router-dom";
import "./../sass/pages/projects.scss";

const Projects = () => {
  const store = [
    {
      id: 1,
      name: "Github Users Search",
      image: require("./../images/githubSearch2.png"),
      link: "https://gitsearch-hub.netlify.app",
      github_url: "https://github.com/F-Hamid/GitHub-Users-Search",
      description:
        "A single page app for searching users and their stats on github : Repos, Followers, Languages,... .",
    },
    {
      id: 2,
      name: "Architacture and interior design ",
      image: require("./../images/architecht.png"),
      link: "https://architect-interior-design.netlify.app/",
      github_url: "https://github.com/F-Hamid/Architecture-Interior-Website",
      description:
        "A styled and responsive web SPA for a Architacture and interior design agency.",
    },

    {
      id: 3,
      name: "Budget App ",
      image: require("./../images/budgetapp.png"),
      link: "https://budgetspa.netlify.app",
      github_url: "https://github.com/F-Hamid/Budget-App",
      description:
        "A styled and responsive web App for managing and keeping truck of your budget.",
    },
    {
      id: 5,
      name: "Pedromedia",
      image: require("./../images/pedromedia.png"),
      link: "https://pedromedia.netlify.app",
      github_url: "https://github.com/F-Hamid/Pedromedia",
      description:
        "A styled and responsive website with services and contact information for a photographer startup.",
    },
    {
      id: 4,
      name: "Quote or joke",
      image: require("./../images/quoteorjoke.png"),
      link: "https://quote-jocke.netlify.app/",
      github_url: "https://github.com/F-Hamid/Quote-or-Joke",
      description:
        "A styled and responsive web App for some wisdome and funny jokes on one click.",
    },
  ];

  // Animation
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 20;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  return (
    <>
      <section className="projects">
        <div className="header reveal">
          <h1 className="header-heading">Projects</h1>
          <hr className="header-bar" />
          <p className="header-text">
            A styled and responsive web App for some wisdome and funny jokes on
            one click.
          </p>
        </div>
        <main className="projects-main">
          <Link className="more reveal" to="/projects">
            <img
              className="more-img"
              src={require("./../images/cube1.png")}
              alt="cube2"
            />
            <h1 className="more-text">Explore More...</h1>
          </Link>

          {store.map(({ description, id, github_url, name, link, image }) => {
            // console.log(image);
            return (
              <div
                key={id}
                className={`projects-box projects-box_${id} reveal`}
              >
                {/* <div className="projects-box_before">
                    <a
                      href={link}
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Netlify
                    </a>
                  </div> */}
                <div className="card-text">
                  <h1 className="card-text_heading">{name} </h1>
                  <p className="card-text_p">{description}</p>
                </div>
                <img className="projects-box-img" src={image} alt="Github" />

                <div className="projects-box_after">
                  <a href={link} target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                  <a href={github_url} target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-github-alt"></i>
                  </a>
                </div>
              </div>
            );
          })}
          {/* <div className="projects-box projects-box_8">
            <img
              className="projects-box-cube"
              src={require("./../images/cube1.png")}
              alt="Github"
            />
            <h1>More..</h1>
          </div> */}
        </main>
      </section>
    </>
  );
};

export default Projects;
