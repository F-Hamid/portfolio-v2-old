import "../sass/pages/services.scss";
import { CgDesignmodo } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { TbBugOff, TbSeo } from "react-icons/tb";
import { GiRocketFlight, GiAutoRepair } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";

import Circle from "../components/layouts/ServicesCircle";
import shapes from "../images/shapes.png";
import design from "../images/illustration.png";
import code from "../images/coding.png";
import solving from "../images/problem-solving.png";
import seo from "../images/analyzing.png";
import deploy from "../images/startup.png";
import update from "../images/maintenance.png";

const Services = () => {
  return (
    <section className="services" id="services">
      <img src={shapes} alt="" className=" services-bg " />
      <div className="circles-container">
        <Circle title="Design" icon={<CgDesignmodo />} color="color-design" />
        <Circle title="Coding" icon={<FaLaptopCode />} color="color-design" />
        <Circle
          title="Deployment"
          icon={<GiRocketFlight />}
          color="color-design"
        />
        {/* <Circle title="design" icon={code} color="color-code" />
        {/* <Circle title="Coding" icon={code} color="color-code" />
        <Circle title="deployment" icon={deploy} color="color-deploy" /> */}
      </div>
      <div className="header ">
        <h2 className="header-heading shine-text">SERVICES</h2>
        <hr className="header-bar" />
        <p className="header-text">
          "I offer comprehensive websites creation and services, including website
          design, front-end and back-end development, search engine
          optimization, and website maintenance."
        </p>
      </div>
      <div className="circles-container">
        <Circle
          title="Problem solving"
          icon={<TbBugOff />}
          color="color-design"
        />
        <Circle
          title="SEO/Analyze"
          icon={<SiGoogleanalytics />}
          color="color-design"
        />
        <Circle
          title="Update/Maintenance"
          icon={<GiAutoRepair />}
          color="color-design"
        />

        {/* <Circle title="Problem solving" icon={solving} color="color-code" />
        <Circle title="SEO/Analyze" icon={seo} color="color-seo" />
        <Circle title="Update/Maintenance" icon={update} color="color-update" /> */}
      </div>
    </section>
  );
};

export default Services;
