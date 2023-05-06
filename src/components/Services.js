import "../sass/pages/services.scss";
import Circle from "../components/layouts/ServicesCircle";

const Services = () => {
  return (
    <section className="services" id="services">
      <Circle title="Design" parallax="parallax-1" />
      <Circle title="Coding" />
      <Circle title="SEO/Analyze" />
      <Circle title="Deploy" />
      <Circle title="Update/Maintenance" />
    </section>
  );
};

export default Services;
