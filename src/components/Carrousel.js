// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import photographer from "../images/pedromedia.png";
import anas from "../images/anas.png";
import anel from "../images/anel.png";
import angelique from "../images/angelique.png";
import { FaQuoteLeft } from "react-icons/fa";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "../sass/main.scss";
import "../sass/layouts/carroussel.scss";
import { SwipperNavBtn } from "../components/layouts/SwipperNavBtn";

const Carrousel = () => {
  const testimonials = [
    {
      author: "Anel Anaya",
      text: " Hamid is full of ideas, he is a perfectionist and his attention to detail is immaculate. The complexity of my website is beyond my expectations. I am excited to share my website with all my.",
      bgColor: "img-bg2",
      poste: "- Tattoo Artist",
      img: anel,
      imgBg: "img-bg1",
    },
    {
      author: "Anas Tallou ",
      text: "   As scientific researcher, I was looking for a creative and professional website that resume my career and contributions in an innovative way. Hamid made me what I was looking for in short time, high quality work and disposability.",
      poste: "- PhD. Chemistry",
      bgColor: "img-bg6",
      img: anas,
      imgBg: "img-bg3",
    },
    {
      author: "Pedro Zouhir",
      text: " Exactly what and who i needed: a programmer with artistic skills.On top of that professional communication.",
      bgColor: "img-bg7",
      poste: "- Photographer",
      img: photographer,
      imgBg: "img-bg8",
    },
    {
      author: "SimoSUd",
      text: "  Hamid est un perfectionniste et ses suggestions et observations sont remarquables. Je suis ravi d'avoir' mon site Web conçu et créé par un professionnel!",
      bgColor: "img-bg1",
      poste: "- Rental Agency ",
      img: angelique,
      imgBg: "img-bg3",
    },
  ];

  return (
    <>
      {/* Slide container */}
      <Swiper
        loop={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {/* Slide Cards */}
        {testimonials.map(({ author, text, bgColor, img, imgBg, poste }) => {
          return (
            <SwiperSlide key={author} className={`swiperSlide ${bgColor}`}>
              <div className="slid-container ">
                {/* Text */}
                <div className="slide-text  ">
                  <h2 className="author">
                    {author} <br />
                    <span className="poste ">{poste}</span>
                  </h2>
                  <p className="text ">
                    <span>
                      <FaQuoteLeft />
                    </span>
                    {text}
                    <span>
                      <FaQuoteLeft className=" quote-icon  " />
                    </span>
                  </p>
                </div>
                {/* IMAGE */}
                <div className={`slide-image-container ${imgBg} `}>
                  <img
                    src={img}
                    alt=""
                    className="slide-image absolute  bg-cover "
                  />
                </div>
              </div>
              <SwipperNavBtn />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Carrousel;
