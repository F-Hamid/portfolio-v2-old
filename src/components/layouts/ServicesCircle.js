import "../../sass/layouts/servicesCircle.scss";

const ServicesCircle = ({ title, parallax }) => {
  return <div className={`circle ${parallax}`}>{title}</div>;
};

export default ServicesCircle;
