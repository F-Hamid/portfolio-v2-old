import "../../sass/layouts/servicesCircle.scss";

const ServicesCircle = ({ title, icon, color }) => {
  return (
    <section className="circle-container">
      <a href="#contact" className={`circle  ${color}`}>
        {/* <img src={icon} className="circle-image" alt="service" /> */}
        <div className="icons circle-icon">{icon}</div>
      </a>

      <h2 className="title">{title}</h2>
    </section>
  );
};

export default ServicesCircle;
