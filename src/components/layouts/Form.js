import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../sass/layouts/form.scss";

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
      {/* <h2 className=" shine">contact me!</h2> */}
      <form
        onSubmit={sendEmail}
        ref={form}
        className=" form-container"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="form-container ">
          <input
            className="input"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required={true}
          />
        </div>
        <div className="form-container ">
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required={true}
          />
          <p className=" paragraph text-main text-xl font-light italic">
            Please Insert an email.
          </p>
        </div>

        <textarea
          id="message"
          name="message"
          className="message "
          placeholder="Message"
        />
        <p className="text-main text-xl font-light italic">Your Message</p>

        <div className="flex items-center justify-evenly w-[70%] mb-8">
          <button type="submit" value="Send" className="form-button  ">
            SEND
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Form;
