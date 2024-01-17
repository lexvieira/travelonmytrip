import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import styled from "styled-components";

export default function App() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "120px",
      duration: 3000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #welcome,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <AppContainer>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      {/* <Testimonials /> */}
      <Footer />
    </AppContainer>
  );
}


const AppContainer = styled.section`
  .logo-byb {
    width: 200px;
  }
  .color-country-title {
    color: #4468e2;
  }
  .color-region-title {
    color: #4468e2;
  }  
  .justify-content-center {
    justify-content: center
  }  
  .align-items-center {
    align-items: center;
  }
  .d-flex {
    display: flex;
  }
  .d-none {
    display: none!important;
  }
  .space-evenly {
    justify-content: space-evenly;
  }
  p {
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 10px;
  }
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;      
  }
  .row-margin-top: {
    margin-top: 20px!important;
  }       
  .col {
    box-sizing: border-box;
    flex: 1;
    padding: 10px;
  }
  .d-none {
    display: none;
  }
  .grid {
    display: grid;  
  }
  .grid-center {
    display: inline-flex;
    flex-wrap: nowrap;
    align-content: center;
    gap:20px;
    align-items: center;
  }
  @media (max-width: 767px) {
    .col {
      flex-basis: 100%; /* 1 columns on Smartphone */
    }
    .grid-center {
      flex-wrap: wrap;
    }    
  }
  
  @media (min-width: 768px) {
    .col {
      flex-basis: 50%; /* 2 columns on tablet */
    }
  }

  @media (min-width: 992px) {
    .col {
      flex-basis: 33.33%; /* 3 columns on desktop */
    }
  }

  @media (min-width: 1200px) {
    .col {
      flex-basis: 25%; /* 4 columns on large desktop */
    }
  }  
  
  `

