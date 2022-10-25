import React from "react";
import "../../sass/layouts/testimCards.scss";

const TestimonialCard = () => {
  return (
    <ul class="slideshow">
      <li>
        <span>
          <figure class="snip1197">
            <figcaption>
              <blockquote>
                Hamid is full of ideas, he is a perfectionist and his attention
                to detail is immaculate. The complexity of my website is beyond
                my expectations. I am excited to share my website with all my
                new customers!
              </blockquote>
              <div class="arrow"></div>
            </figcaption>
            <img src={require("../../images/anel.png")} alt="sq-sample10" />
            <div class="author">
              <h5>
                Anel Anaya <span>- Tattoo Artist</span>
              </h5>
            </div>
          </figure>
        </span>
      </li>

      <li>
        <span>
          <figure class="snip1197">
            <figcaption>
              <blockquote>
                As scientific researcher, I was looking for a creative and
                professional website that resume my career and present my
                previous scientific contributions in a special and innovative
                way. Hamid made me what I was looking for in short time, high
                quality work and total disposability.
              </blockquote>
              <div class="arrow"></div>
            </figcaption>
            <img src={require("../../images/anas.png")} alt="sq-sample10" />
            <div class="author">
              <h5>
                Anas Tallou <span>- PhD. Chemistry</span>
              </h5>
            </div>
          </figure>
        </span>
      </li>

      <li>
        <span>
          <figure class="snip1197">
            <figcaption>
              <blockquote>
                Exactly what and who i needed: a programmer with artistic
                skills.On top of that professional communication.
              </blockquote>
              <div class="arrow"></div>
            </figcaption>
            <img
              src={require("../../images/pedroMedia.jpg")}
              alt="sq-sample10"
            />
            <div class="author">
              <h5>
                Pedro Zouhir <span>- Photographer</span>
              </h5>
            </div>
          </figure>
        </span>
      </li>
      <li>
        <span>
          <figure class="snip1197">
            <figcaption>
              <blockquote>
                Hamid est un perfectionniste et ses suggestions et observation
                sont remarquables. Je suis ravi d'avoir' mon site Web conçu et
                créé par ce professionnel!
              </blockquote>
              <div class="arrow"></div>
            </figcaption>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample10.jpg"
              alt="sq-sample10"
            />
            <div class="author">
              <h5>
                Pelican Steve <span>- LittleSnippets</span>
              </h5>
            </div>
          </figure>
        </span>
      </li>
      {/* <li>
        <span>
          <figure class="snip1197 hover">
            <figcaption>
              <blockquote>
                I don't need to compromise on my principles, because they don't
                have the slightest bearing on what happens to me anyway.
              </blockquote>
              <div class="arrow"></div>
            </figcaption>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample33.jpg"
              alt="sq-sample33"
            />
            <div class="author">
              <h5>
                Max Conversion<span>- LittleSnippets</span>
              </h5>
            </div>
          </figure>
        </span>
      </li> */}
    </ul>
  );
};

export default TestimonialCard;
