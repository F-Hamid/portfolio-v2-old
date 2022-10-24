import React from "react";
import { Link } from "react-router-dom";
import "./../../sass/layouts/resume.scss";

//
export default function Resume() {
  return (
    <div className="resume ">
      <Link href="/" to="/" className="resume-back-home ">
        <i className="fa-solid fa-house-laptop"></i>
      </Link>
      <img
        className="resume-img"
        src={require("./../../images/resume/resume-img.png")}
        alt="My-resume"
      />
      <button type="button" className="resume-btn btn btn-info ">
        <a
          href={require("./../../images/resume/resume-pdf.pdf")}
          download="Hamidweb-Resume"
        >
          <i class="fa-solid fa-file-pdf"></i>
        </a>
      </button>
    </div>
  );
}
