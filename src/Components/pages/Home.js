import React from "react";
import Cta from "../Cta";
import Feature from "../Feature";
import Footer from "../Footer";
import Main from "../Main";
import Navbar from "../Navbar";
import Pricing from "../Pricing";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Feature />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
