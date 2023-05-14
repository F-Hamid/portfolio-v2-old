import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../sass/layouts/form.scss";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_felonlr",
        "template_portfolio",
        form.current,
        "pinNYZDUqQIeG8diT"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("EMAIL SEND SUCCESSFULLY!");
        },
        (error) => {
          console.log(error.text);
          toast.error("SOMETHING WENT WRONG! PLEASE TRY AGAIN");
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
        </div>

        <textarea
          id="message"
          name="message"
          className="message "
          placeholder="Message"
        />
        <p className="paragraph">Your Message</p>

        <div className="button">
          <input type="submit" value="Send" className=" form-button" />
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Form;
