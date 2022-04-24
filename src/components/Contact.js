import React from "react";
import "./../sass/pages/contact.scss";

const Contact = () => {
  // const store = [
  //   {
  //     id: 2,
  //     name: "Architacture and interior design ",
  //     image: require("./../images/architecht.png"),
  //     link: "https://architect-interior-design.netlify.app/",
  //     github_url: "https://github.com/F-Hamid/Architecture-Interior-Website",
  //     description:
  //       "A styled and responsive web SPA for a Architacture and interior design agency.",
  //   },
  // ];

  return (
    <>
      <section className="contact">
        <h1 className="contact-heading reveal">
          {" "}
          Time to bring those <span className="ideas">ideas</span> to the light
        </h1>
        <div className="media">
          <div className="media-1">
            <i class="fa-solid fa-envelope fa"></i>
            <i class="fa-solid fa-mobile-screen-button fa"></i>
            <i class="fa-brands fa-whatsapp fa"></i>
            <i class="fa-brands fa-github fa"></i>
          </div>
          <div className="media-1">
            <i class="fa-brands fa-linkedin fa"></i>
            <i class="fa-brands fa-twitter fa"></i>
            <i class="fa-brands fa-facebook fa"></i>
            <i class="fa-solid fa-house-circle-check fa"></i>
          </div>
        </div>
        <img
          className="tech-img-contact tech-img-contact-8 reverse"
          src={require("./../images/tech1.png")}
          alt="about image"
        />
        <img
          className="tech-img-contact tech-img-contact-9"
          src={require("./../images/tech11.png")}
          alt="about image"
        />
        <img
          className="tech-img-contact tech-img-contact-11"
          src={require("./../images/tech10.png")}
          alt="about image"
        />
        <img
          className="tech-img-contact tech-img-contact-13"
          src={require("./../images/tech13.png")}
          alt="about image"
        />

        <img
          className="tech-img-contact tech-img-contact-7 reverse "
          src={require("./../images/tech6.png")}
          alt="about image"
        />
        <img
          className="tech-img-contact tech-img-contact-6 reverse"
          src={require("./../images/tech7.png")}
          alt="about image"
        />
        <img
          className="tech-img-contact tech-img-contact-5"
          src={require("./../images/tech8.png")}
          alt="about image"
        />
        <img
          className="tech-img-contact tech-img-contact-4"
          src={require("./../images/tech9.png")}
          alt="about image"
        />
        <img
          className="tech-img-contact tech-img-contact-12 reverse"
          src={require("./../images/tech5.png")}
          alt="about image"
        />

        <img
          className="tech-img-contact tech-img-contact-14 reverse"
          src={require("./../images/tech15.png")}
          alt="about image"
        />
      </section>
    </>
  );
};

export default Contact;
