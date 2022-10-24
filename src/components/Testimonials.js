import React from "react";
import "../sass/layouts/Testimonials.scss";
import TestimonialCard from "./layouts/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="testim">
      {/* <div className="header">Header</div> */}
      <div className="cards">
        <TestimonialCard />
        {/* <figure class="snip1197">
          <figcaption>
            <blockquote>
              Sometimes I think the surest sign that intelligent life exists
              elsewhere in the universe is that none of it has tried to contact
              us.
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
        </figure> */}
      </div>
    </section>
  );
};

export default Testimonials;
