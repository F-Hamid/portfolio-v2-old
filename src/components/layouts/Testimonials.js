import Carrousel from "../Carrousel";

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="center w-screen h-full  pb-[35rem] font-main text-main 
                 color-three bg-gradient-to-b from-white to-[#3685B5]"
    >
      <div className="testim  w-full   h-full center flex-col">
        <Carrousel />
      </div>
    </section>
  );
};

export default Testimonials;
