import React from "react";
import "../sass/layouts/Testimonials.scss";
import TestimonialCard from "./layouts/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="testim">
      <h1 className="testim-heading reveal">Testimonials</h1>
      <div className="cards">
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
