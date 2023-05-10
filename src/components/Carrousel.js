// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import photographer2 from "../images/logo.png";
import graphiste from "../images/logo.png";
import Developeuse from "../images/logo.png";
import study from "../images/logo.png";
import { FaQuoteLeft } from "react-icons/fa";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "../sass/main.scss";
import "../sass/layouts/carroussel.scss";
// import { SwipperNavBtn } from "./SwipperNavBtn";

const Carrousel = () => {
  const testimonials = [
    {
      author: "- Camille Moreau ",
      text: "En tant que photographe, j'apprécie la façon dont ce magazine met en avant la photographie d'art et les artistes qui la pratiquent. C'est une source d'inspiration et une opportunité de découvrir de nouveaux talents.",
      bgColor: "bg-[#5BC67A]",
      poste: "-Photographe.",
      img: study,
      imgBg: "bg-[#F87474]",
    },
    {
      author: "Thomas Bounoie",
      text: "J'ai toujours été fascinée par l'art et l'esthétique, et je suis ravie de pouvoir travailler pour un magazine qui célèbre la beauté et la créativité. Je suis fière de faire partie de cette équipe.",
      poste: "-Rédacteur en Chef",
      bgColor: "bg-[#453C67]",
      img: photographer2,
      imgBg: "bg-main",
    },
    {
      author: "Marie Dubois",
      text: "Je suis fière de travailler pour ce magazine d'art qui met en valeur la créativité et la beauté dans toutes ses formes. C'est un privilège de faire partie d'une équipe aussi talentueuse.",
      bgColor: "bg-black ",
      poste: "-Developeuse web",
      img: Developeuse,
      imgBg: "bg-[#F4B63F]",
    },
    {
      author: "Antoine Dupont",
      text: "J'ai toujours été passionné par l'art, et ce magazine me permet de découvrir de nouveaux artistes et de me tenir informé des dernières tendances. Je suis fier de contribuer à la réalisation de cette publication de qualité.",
      bgColor: "bg-second",
      poste: "-Graphiste",
      img: graphiste,
      imgBg: "bg-[#9A21DC]",
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
            <SwiperSlide
              key={author}
              className={`swiperSlide ${bgColor} shadow-2xl max-w-[92vw]`}
            >
              <div className="slid-container relative flex flex-row  w-full h-full ">
                {/* Text */}
                <div className="slide-text center w-2/3 h-full ">
                  <h2 className="author text-5xl absolute top-[3.5rem] left-[37%] z-50 text-white font-third">
                    {author} <br />
                    <span className="poste text-xl p-2 pl-2 text-purples">
                      {poste}
                    </span>
                  </h2>
                  <p className="text p-6 text-3xl  flex-col text-white font-secondary font-normal">
                    <span>
                      <FaQuoteLeft />
                    </span>
                    {text}
                    <span>
                      <FaQuoteLeft className=" quote-icon -scale-100 ml-[80%] " />
                    </span>
                  </p>
                </div>
                {/* IMAGE */}
                <div
                  className={`slide-image-container relative bg-cover rounded-l-[3.5rem] w-3/5 ${imgBg} h-full`}
                >
                  <img
                    src={img}
                    alt=""
                    className="slide-image absolute  bg-cover h-full w-full bottom-0 right-24"
                  />
                </div>
              </div>
              {/* <SwipperNavBtn /> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Carrousel;
