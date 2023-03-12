import React from "react";

const Cta = () => {
  return (
    <>
      <section className="colored-section" id="cta">
        <div className="container-fluid">
          <h3 className="big-heading">
            Find the True Love of Your Dog's Life Today.
          </h3>
          <button
            className="cta-download-button btn btn-lg btn-dark"
            type="button"
          >
            <i className="fab fa-apple"></i> Download
          </button>
          <button
            className="cta-download-button btn btn-outline-dark  btn-lg "
            type="button"
          >
            <i className="fab fa-google-play"></i>
            Download
          </button>
        </div>
      </section>
    </>
  );
};

export default Cta;
