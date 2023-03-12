import React from "react";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
      <section id="title" className="title-container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="big-heading">
              Meet new and interesting dogs nearby.
            </h1>
            <button type="button" class="btn btn-dark btn-lg download-button">
              <i className="fab fa-apple"></i>
              Download
            </button>

            <button
              type="button"
              className="btn btn-outline-dark btn-lg download-button"
            >
              <i className="fab fa-google-play"></i>
              Download
            </button>
          </div>

          <div className="col-lg-6">
            <img
              className="title-image"
              src="images/iphone6.png"
              alt="iphone-mockup"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
