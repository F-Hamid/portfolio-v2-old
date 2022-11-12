import React from "react";
import { Helmet } from "react-helmet";
import "./../sass/pages/all-projects.scss";
import Contact from "./Contact";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const AllProjects = () => {
  const html = <i class="fa-brands fa-html5"></i>;
  const css = <i class="fa-brands fa-css3-alt"></i>;
  const js = <i class="fa-brands fa-js"></i>;
  const react = <i class="fa-brands fa-react"></i>;
  const sass = <i class="fa-brands fa-sass"></i>;
  const node = <i class="fa-brands fa-node"></i>;
  const btsrp = <i class="fa-brands fa-bootstrap"></i>;
  const tlwnd = <SiTailwindcss />;
  const express = <SiExpress />;
  const mongoDb = <SiMongodb />;

  const store = [
    {
      id: 1,
      name: "Tattoo Artist",
      image: require("./../images/mexihenna.png"),
      stack: [html, js, tlwnd, react],
      reveal: "",
      link: "https://mexihenna.netlify.app/",
      github_url: "https://github.com/F-Hamid/",
      description:
        "Modern and styled website for the best Tattoo Artist in Denver Co.",
    },
    {
      id: 13,
      name: "Scientist Portfolio",
      image: require("./../images/heroSection.png"),
      stack: [html, js, tlwnd, react],
      reveal: "",
      link: "https://tallouanas.netlify.app/",
      github_url: "",
      description:
        "I provided my client with this pixel perfect website that gathers all his information, work, and professional skills. ",
    },
    {
      id: 0,
      name: "Skill Up",
      image: require("./../images/skillup-chart.png"),
      stack: [html, css, sass, js, react, node, express, mongoDb],
      reveal: "",
      link: "https://skill-up-webapp.herokuapp.com/",
      github_url: "https://github.com/F-Hamid/SKILLUP",
      description:
        "A big scale project that manage and track the learning path and skills added by the user and help store the data of each skill.",
    },

    {
      id: 2,
      name: "Architecture and interior design ",
      image: require("./../images/architecht.png"),
      stack: [html, css, sass, btsrp, js],
      reveal: "",
      link: "https://architect-interior-design.netlify.app/",
      github_url: "https://github.com/F-Hamid/Architecture-Interior-Website",
      description:
        "A styled and responsive website for a Architecture and interior design agency.",
    },
    {
      id: 3,
      name: "Weather App ",
      image: require("./../images/weatherApp.png"),
      stack: [html, css, sass, btsrp, js, react],
      reveal: "reveal",
      link: "https://spa-weather.netlify.app",
      github_url: "https://github.com/F-Hamid/Weather-app",
      description:
        "Live Weather infos based on location: single page Application.",
    },
    {
      id: 6,
      name: "Pedromedia",
      image: require("./../images/pedromedia.png"),
      stack: [html, css, sass, btsrp, js],
      reveal: "reveal",
      link: "https://pedromedia.netlify.app",
      github_url: "https://github.com/F-Hamid/Pedromedia",
      description:
        "A styled and responsive website with services and contact information for a photographer startup.",
    },

    {
      id: 5,
      name: "Budget App ",
      image: require("./../images/budgetapp.png"),
      stack: [html, css, sass, btsrp, js, react],
      reveal: "reveal",
      link: "https://budgetspa.netlify.app",
      github_url: "https://github.com/F-Hamid/Budget-App",
      description:
        "Single page application for managing and keeping track of your budget.",
    },

    {
      id: 12,
      name: "QR-Code Generator",
      image: require("./../images/qrcode.png"),
      stack: [html, css, js],
      reveal: "reveal",
      link: "  https://qr-gnerator.netlify.app/",
      github_url: "https://github.com/F-Hamid/QR-Generator",
      description: "Simple modern design QR code generator",
    },

    {
      id: 4,
      name: "SimoSud Website ",
      image: require("./../images/sumosud.png"),
      stack: [html, css, sass, js, react],
      reveal: "reveal",
      link: "https://simosud.netlify.app",
      github_url: "https://github.com/F-Hamid/SimoSud",
      description:
        "A styled and responsive website with services and contact information for fishing and touristic rental agency.",
    },

    {
      id: 19,
      name: "Github Users Search",
      image: require("./../images/githubSearch2.png"),
      stack: [html, sass, js, react, node, express, mongoDb],
      reveal: "reveal",
      link: "https://gitsearch-hub.netlify.app",
      github_url: "https://github.com/F-Hamid/GitHub-Users-Search",
      description:
        "Web page application for searching users and their stats on github : Repos, Followers, skills,... .",
    },
    {
      id: 18,
      name: "Cabinet Dentiste Al Jazeera ",
      image: require("./../images/jazeera.png"),
      stack: [html, css, sass, js],
      reveal: "reveal",
      link: "https://cabinetaljazeera.netlify.app/",
      github_url: "https://github.com/F-Hamid/Cabinet-Aljazeera",
      description:
        "Beautiful glass styled website for a local dentist with services and contact information.",
    },
    {
      id: 7,
      name: "Quote or joke",
      image: require("./../images/quoteorjoke.png"),
      stack: [html, css, js],
      reveal: "reveal",
      link: "https://quote-jocke.netlify.app/",
      github_url: "https://github.com/F-Hamid/Quote-or-Joke",
      description:
        "Useful and entertaining website with wisdom quotes and funny jokes generated by two separate online APIs on one click.",
    },
    {
      id: 8,
      name: "Counter",
      image: require("./../images/counter.png"),
      stack: [html, css, sass, js, react],
      reveal: "reveal",
      link: "https://counter-spa.netlify.app",
      github_url: "https://github.com/F-Hamid/React-counter",
      description: "Counter: SPA logic/JS/React practice.",
    },
    {
      id: 9,
      name: "Coin Toss ",
      image: require("./../images/cointoss.png"),
      stack: [html, css, js],
      reveal: "reveal",
      link: "https://cointoss-app.netlify.app",
      github_url: "https://github.com/F-Hamid/coin-toss",
      description: "Coin Toss game : SPA logic/JS practice.",
    },
    {
      id: 10,
      name: "Calculator ",
      image: require("./../images/calculator.png"),
      stack: [html, css, js],
      reveal: "reveal",
      link: "https://spacalculator.netlify.app",
      github_url: "https://github.com/F-Hamid/Caclulator",
      description: "Efficient calculator using minium code.",
    },
    {
      id: 11,
      name: "ToDo App ",
      image: require("./../images/todo.png"),
      stack: [html, css, react, js],
      reveal: "reveal",
      link: "https://spatodo.netlify.app",
      github_url: "https://github.com/F-Hamid/React-Todo-App",
      description:
        "A styled and responsive web App for managing and keeping track of your work.",
    },
  ];

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
                      <i class="fa-brands fa-github"></i>
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
