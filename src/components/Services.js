import "../sass/pages/services.scss";

import Circle from "../components/layouts/ServicesCircle";
import shapes from "../images/shapes.png";
import design from "../images/illustration.png";
import code from "../images/coding.png";
import seo from "../images/analyzing.png";
import deploy from "../images/startup.png";
import update from "../images/maintenance.png";

const Services = () => {
  return (
    <section className="services" id="services">
      <img src={shapes} alt="" className=" services-bg " />
      <div className="header ">
        <h2 className="header-heading shine-text">SERVICES</h2>
        <hr className="header-bar" />
        <p className="header-text">
          My work reflects real life web applications, various skills and
          problem solving. To explore even more, check out the links below.
        </p>
      </div>
      <div className="circles-container">
        <Circle title="Design" icon={design} color="color-design" />
        <Circle title="Coding" icon={code} color="color-code" />
        <Circle title="SEO/Analyze" icon={seo} color="color-seo" />
        <Circle title="Deploy" icon={deploy} color="color-deploy" />
        <Circle title="Update/Maintenance" icon={update} color="color-update" />
      </div>
    </section>
  );
};

export default Services;
