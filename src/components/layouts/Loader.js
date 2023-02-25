import React from "react";
import "../../sass/pages/home.scss";

const Loader = () => {
  return (
    <div className="welcome-container">
      <h2 className="shine-text welcome">WELCOME!</h2>
    </div>
    // <div className="spinner">
    //   <div className="spinner-border text-primary" role="status">
    //     <span className="visually-hidden">Loading...</span>
    //   </div>

    //   <div className="spinner-border text-danger" role="status">
    //     <span className="visually-hidden">Loading...</span>
    //   </div>
    //   <div className="spinner-border text-info" role="status">
    //     <span className="visually-hidden">Loading...</span>
    //   </div>
    // </div>
  );
};

export default Loader;
