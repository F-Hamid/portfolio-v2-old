import React from "react";
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
    // {
    //   id: 3,
    //   name: "Weather App ",
    //   image: require("./../images/weatherApp.png"),
    //   link: "https://spa-weather.netlify.app",
    //   github_url: "https://github.com/F-Hamid/Weather-app",
    //   description: "Live Weather infos based on location: single page App .",
    // },
    // {
    //   id: 4,
    //   name: "SimoSud Website ",
    //   image: require("./../images/sumosud.png"),
    //   link: "https://simosud.netlify.app",
    //   github_url: "https://github.com/F-Hamid/SimoSud",
    //   description:
    //     "A styled and responsive website with services and contact information for fishing and touristic startup.",
    // },
    {
      id: 3,
      name: "Budget App ",
      image: require("./../images/budgetapp.png"),
      link: "https://budgetspa.netlify.app",
      github_url: "https://github.com/F-Hamid/Budget-App",
      description:
        "A styled and responsive web App for managing and keeping truck of your budget.",
    },
    // {
    //   id: 6,
    //   name: "Pedromedia",
    //   image: require("./../images/pedromedia.png"),
    //   link: "https://pedromedia.netlify.app",
    //   github_url: "https://github.com/F-Hamid/Pedromedia",
    //   description:
    //     "A styled and responsive website with services and contact information for a photographer startup.",
    // },
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

  return (
    <>
      <section className="projects">
        {/* <div className="projects-bar">Projects</div> */}
        <main className="projects-main">
          {store.map(({ description, id, github_url, name, link, image }) => {
            // console.log(image);
            return (
              <div key={id} className={`projects-box projects-box_${id}`}>
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
                  <h1>{name} </h1>
                  <h3>{description}</h3>
                </div>
                <img className="projects-box-img" src={image} alt="Github" />

                <div className="projects-box_after">AFTER</div>
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
