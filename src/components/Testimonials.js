import Carrousel from "./Carrousel";
import "../sass/pages/testimonials.scss";

const Testimonials = () => {
  return (
    <div id="testimonial" className="testimonial">
      <h2 className="header-heading shine-text">TESTIMONIALS</h2>
      <Carrousel />
    </div>
  );
};

export default Testimonials;
