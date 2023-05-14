import Form from "../components/layouts/Form";

import "./../sass/pages/contact.scss";
import { SiUpwork } from "react-icons/si";
import TechImg from "./layouts/TechImg";

const Contact = () => {
  return (
    <>
      <section className="contact " id="contact">
        <div className="contact-square-1 parallax parallax-1">
          <div className="contact-square-2 parallax parallax-2">
            <h2 className="shine">Contact Me</h2>
          </div>
        </div>

        <div
          className="contact-heading "
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <h2 className="contact-heading ">
            Let's bring those <span className="ideas shine-text">ideas</span> to
            the light
          </h2>
        </div>
        <div className="form">
          <Form />
        </div>
        <div className="media ">
          <div className="media-1">
            <a
              className="fa"
              href="mail-to:f.hamidweb@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope fa"></i>
            </a>

            <a
              className="fa"
              href="tel: +212 661805827"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-mobile-screen-button fa"></i>
            </a>

            <a
              className="fa"
              href="https://wa.me/21261805827"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp fa"></i>
            </a>

            <a
              className="fa"
              href="https://twitter.com/Hamid7web"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa"></i>
            </a>
            <a
              className="fa"
              href="https://github.com/F-Hamid"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
          <div className="media-1">
            <a
              className="fa"
              href="https://www.linkedin.com/in/hamid-fateh-9206b9238/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa"></i>
            </a>
            <a
              className="fa"
              href="https://www.upwork.com/freelancers/~01e7abd7e3523da42a"
              target="_blank"
              rel="noreferrer"
            >
              <SiUpwork />
            </a>

            <a
              className="fa"
              href="https://www.facebook.com/hamid.fateh.14/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook fa"></i>
            </a>
            <a className="fa" href="#home">
              <i className="fa-solid fa-house-circle-check fa"></i>
            </a>
          </div>
        </div>

        <TechImg />

        <div className="footer__copyright">
          <p className="footer__copyright-p">
            2023@ Created by
            <a
              href="https://wa.me/212661805827"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              F.Hamid
            </a>
            for personnel and professional use.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
