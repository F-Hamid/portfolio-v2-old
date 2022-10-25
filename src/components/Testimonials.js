import React from "react";
import "../sass/layouts/Testimonials.scss";
import TestimonialCard from "./layouts/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testim">
      <h1 className="testim-heading reveal">Testimonials</h1>
      <div className="cards">
        <TestimonialCard />
      </div>
      <a href="#contact" className="testim-arrows">
        <h1 className="arrow-heading">contact me</h1>
        <div class="arrows arrow-testim"></div>
      </a>
    </section>
  );
};

export default Testimonials;
