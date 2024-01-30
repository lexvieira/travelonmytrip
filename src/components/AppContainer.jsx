import React, { useEffect } from "react";
// import Footer from "./Footer";
import Hero from "./Hero";
// import Navbar from "./Navbar";
import Recommend from "./Recommend";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";
// import Testimonials from "./Testimonials";
// import styled from "styled-components";

const AppContainer = () => {

  return (  
    <>
      <ScrollToTop />
      <Hero />
      <Services />
      <Recommend />
      {/* <Testimonials /> */}
    </>
  );
}


export default AppContainer;