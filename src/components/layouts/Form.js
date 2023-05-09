import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_felonlr",
        "template_r-magazine",
        form.current,
        "vRcfaBC9Kbh764_Nw"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email envoyé avec succès!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Quelque chose s'est mal passé! Veuillez réessayer");
        }
      );
    e.target?.reset();
  };
  return (
    <section
      id="form"
      className="center relative flex-col w-screen h-full p-12 py-56 bg-gradient-to-b from-white to-[#3281ae]"
    >
      {/* <img
        src={formShapes}
        alt=""
        className="bg w-2/5 absolute top-72 left-0 opacity-[12%] "
      /> */}
      <h2
        className="testim-header mt-4 text-white font-forth font-light my-12 tracking-widest bg-main p-12 w-1/3 text-center rounded-md  text-5xl uppercase"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        CONTACT
      </h2>
      <form
        onSubmit={sendEmail}
        ref={form}
        className=" text-3xl h-3/4 xlg:w-3/5 w-[98%] center flex-col my-12 shadow-2xl rounded px-8 pt-16 pb-8 mb-4 bg-gray"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="mb-8 w-[90%] mt-8 ">
          <input
            className="shadow appearance-none border border-gray-500 rounded w-full h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  font-third  form-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required={true}
          />
        </div>
        <div className="mb-6 w-[90%]">
          <input
            className="shadow appearance-none border border-gray-500 rounded w-full h-24 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline font-third   form-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required={true}
          />
          <p className="text-main text-xl font-light italic">
            Please Insert an email.
          </p>
        </div>

        <div className="mb-6 w-[90%]">
          <textarea
            id="message"
            name="message"
            className="shadow h-[20rem] appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline font-third   form-outline"
            placeholder="Message"
          />
          <p className="text-main text-xl font-light italic">Your Message</p>
        </div>
        <div className="flex items-center justify-evenly w-[70%] mb-8">
          <button
            type="submit"
            value="Send"
            className=" navItem w-72 h-20 rounded-md mx-6 my-8 bg-four text-3xl
                text-white hover:shadow-lg shadow-xl cursor-pointer z-20 "
          >
            SEND
          </button>
        </div>
      </form>
      <ToastContainer />;
    </section>
  );
};

export default Form;
