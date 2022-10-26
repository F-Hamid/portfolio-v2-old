import React from "react";
import "../../sass/layouts/testimCards.scss";

const TestimonialCard = () => {
  return (
    <ul className="slideshow">
      <li>
        <span>
          <figure className="snip1197">
            <figcaption>
              <blockquote>
                Hamid is full of ideas, he is a perfectionist and his attention
                to detail is immaculate. The complexity of my website is beyond
                my expectations. I am excited to share my website with all my
                new customers!
              </blockquote>
              <div className="arrow"></div>
            </figcaption>
            <img src={require("../../images/anel.png")} alt="sq-sample10" />
            <div className="author">
              <h5>
                Anel Anaya <span>- Tattoo Artist</span>
              </h5>
            </div>
          </figure>
        </span>
      </li>

      <li>
        <span>
          <figure className="snip1197">
            <figcaption>
              <blockquote>
                As scientific researcher, I was looking for a creative and
                professional website that resume my career and contributions in
                an innovative way. Hamid made me what I was looking for in short
                time, high quality work and disposability.
              </blockquote>
              <div className="arrow"></div>
            </figcaption>
            <img src={require("../../images/anas.png")} alt="sq-sample10" />
            <div className="author">
              <h5>
                Anas Tallou <span>- PhD. Chemistry</span>
              </h5>
            </div>
          </figure>
        </span>
      </li>

      <li>
        <span>
          <figure className="snip1197">
            <figcaption>
              <blockquote>
                Exactly what and who i needed: a programmer with artistic
                skills.On top of that professional communication.
              </blockquote>
              <div className="arrow"></div>
            </figcaption>
            <img
              src={require("../../images/pedroMedia.jpg")}
              alt="sq-sample10"
            />
            <div className="author">
              <h5>
                Pedro Zouhir <span>- Photographer</span>
              </h5>
            </div>
          </figure>
        </span>
      </li>
      <li>
        <span>
          <figure className="snip1197">
            <figcaption>
              <blockquote>
                Hamid est un perfectionniste et ses suggestions et observations
                sont remarquables. Je suis ravi d'avoir' mon site Web conçu et
                créé par un professionnel!
              </blockquote>
              <div className="arrow"></div>
            </figcaption>
            <img src={require("../../images/simosud.png")} alt="sq-sample10" />
            <div className="author">
              <h5>
                SimoSUd <span>- Rental Agency </span>
              </h5>
            </div>
          </figure>
        </span>
      </li>
    </ul>
  );
};

export default TestimonialCard;
