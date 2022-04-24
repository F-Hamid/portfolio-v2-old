import React from "react";
import "./../sass/pages/contact.scss";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h1 className="contact-heading reveal">
          {" "}
          Time to bring those <span className="ideas">ideas</span> to the light
        </h1>
        <div className="media">
          <div className="media-1">
            <a
              className="fa"
              href="mail-to:f.hamidweb@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-solid fa-envelope fa"></i>
            </a>

            <a
              className="fa"
              href="tel: 06 07-877922"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-solid fa-mobile-screen-button fa"></i>
            </a>

            <a
              className="fa"
              href="https://wa.me/21261805827"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-whatsapp fa"></i>
            </a>

            <a
              className="fa"
              href="https://github.com/F-Hamid"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github fa"></i>
            </a>
          </div>
          <div className="media-1">
            <a
              className="fa"
              href="https://www.linkedin.com/in/hamid-fateh-9206b9238/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin fa"></i>
            </a>
            <a
              className="fa"
              href="https://twitter.com/Hamid7web"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-twitter fa"></i>
            </a>

            <a
              className="fa"
              href="https://www.facebook.com/hamid.fateh.14/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-facebook fa"></i>
            </a>
            <a className="fa" href="#home">
              <i class="fa-solid fa-house-circle-check fa"></i>
            </a>
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
        <div className="footer__copyright">
          <p className="footer__copyright-p">
            2022@ Created by
            <a
              href="https://wa.me/212661805827"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              // style="color: greenyellow"
            >
              F.Hamid
            </a>
            for personnel and professionel use.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
