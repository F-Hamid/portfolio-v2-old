import React from "react";
import { Link } from "react-router-dom";
import "./../sass/pages/all-projects.scss";

const AllProjects = () => {
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
      name: "Weather App ",
      image: require("./../images/weatherApp.png"),
      link: "https://spa-weather.netlify.app",
      github_url: "https://github.com/F-Hamid/Weather-app",
      description: "Live Weather infos based on location: single page App .",
    },
    {
      id: 4,
      name: "SimoSud Website ",
      image: require("./../images/sumosud.png"),
      link: "https://simosud.netlify.app",
      github_url: "https://github.com/F-Hamid/SimoSud",
      description:
        "A styled and responsive website with services and contact information for fishing and touristic startup.",
    },
    {
      id: 5,
      name: "Budget App ",
      image: require("./../images/budgetapp.png"),
      link: "https://budgetspa.netlify.app",
      github_url: "https://github.com/F-Hamid/Budget-App",
      description:
        "A styled and responsive web App for managing and keeping truck of your budget.",
    },
    {
      id: 6,
      name: "Pedromedia",
      image: require("./../images/pedromedia.png"),
      link: "https://pedromedia.netlify.app",
      github_url: "https://github.com/F-Hamid/Pedromedia",
      description:
        "A styled and responsive website with services and contact information for a photographer startup.",
    },
    {
      id: 7,
      name: "Quote or joke",
      image: require("./../images/quoteorjoke.png"),
      link: "https://quote-jocke.netlify.app/",
      github_url: "https://github.com/F-Hamid/Quote-or-Joke",
      description:
        "A styled and responsive web App for some wisdome and funny jokes on one click.",
    },
    {
      id: 8,
      name: "Counter",
      image: require("./../images/counter.png"),
      link: "https://counter-spa.netlify.app",
      github_url: "https://github.com/F-Hamid/React-counter",
      description: "Counter: simple logic/React practice.",
    },
    {
      id: 9,
      name: "Coin Toss ",
      image: require("./../images/cointoss.png"),
      link: "https://cointoss-app.netlify.app",
      github_url: "https://github.com/F-Hamid/coin-toss",
      description: "Coin Toss game : simple logic/JS practice.",
    },
    {
      id: 10,
      name: "Calculator ",
      image: require("./../images/calculator.png"),
      link: "https://spacalculator.netlify.app",
      github_url: "https://github.com/F-Hamid/Caclulator",
      description: "efficient calculator using minium code.",
    },
    {
      id: 11,
      name: "ToDo App ",
      image: require("./../images/todo.png"),
      link: "https://spatodo.netlify.app",
      github_url: "https://github.com/F-Hamid/React-Todo-App",
      description:
        "A styled and responsive web App for managing and keeping truck of your work.",
    },
    {
      id: 12,
      name: "Cabinet Dentiste Al Jazeera ",
      image: require("./../images/jazeera.png"),
      link: "https://cabinetaljazeera.netlify.app/",
      github_url: "https://github.com/F-Hamid/Cabinet-Aljazeera",
      description:
        "A simple glasse styled page with services and contact information.",
    },
  ];

  return (
    <>
      <section className="allProjects">
        <Link to="/" className="back-home">
          <i class="fa-solid fa-house-laptop"></i>
        </Link>
        <div className="header ">
          <h1 className="header-heading">Projects</h1>
          <hr className="header-bar" />
          <p className="header-text">
            A styled and responsive web App for some wisdome and funny jokes on
            one click.
          </p>
        </div>
        <main className="allProjects-main">
          {store.map(({ description, id, github_url, name, link, image }) => {
            // console.log(image);
            return (
              <div
                key={id}
                className={`allProjects-box allProjects-box_${id} `}
              >
                <div className="card-text">
                  <h1 className="card-text_heading">{name} </h1>
                  <p className="card-text_p">{description}</p>
                </div>
                <img className="allProjects-box-img" src={image} alt="Github" />

                <div className="allProjects-box_after">
                  <a href={link} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                  <a href={github_url} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github-alt"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </main>
      </section>
    </>
  );
};

export default AllProjects;
