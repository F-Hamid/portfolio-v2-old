import "../../sass/layouts/servicesCircle.scss";

const ServicesCircle = ({ title, icon, color }) => {
  return (
    <section className="circle-container">
      <div className={`circle  ${color}`}>
        <img src={icon} className="circle-image" alt="" />
      </div>

      <h2 className="title">{title}</h2>
    </section>
  );
};

export default ServicesCircle;
