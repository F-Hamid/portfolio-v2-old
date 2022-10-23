import React from "react";
import { Link } from "react-router-dom";
import "./../../sass/layouts/resume.scss";

//
export default function Resume() {
  return (
    <div className="resume container">
      <Link href="#about" to="/" className="resume-back-home reveal">
        <i className="fa-solid fa-house-laptop"></i>
      </Link>
      <img
        className="resume-img"
        src={require("./../../images/resume/resume-img.png")}
        alt="My-resume"
      />
      <button type="button" className="resume-btn btn btn-info reveal">
        <a
          href={require("./../../images/resume/resume-pdf.pdf")}
          download="Hamidweb-Resume"
        >
          Download .Pdf
        </a>
      </button>
    </div>
  );
}
