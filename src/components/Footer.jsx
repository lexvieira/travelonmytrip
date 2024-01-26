import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook, BsWhatsapp, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/logo.webp";
import TipMessage from "./Util/Tip";
// import GetImageSrc from "./Util/GetImageSrc";
export default function Footer() {
  return (
    <>
      {/* <FooterContainer className="d-none"> */}
      {/* <div className="container d-none"> */}
      {/* <img src={GetImageSrc("../assets/avatarImage.jpeg")} className="logo-byb" alt="" /> */}
      {/* <GetImageSrc src="images/byb-logo.png" className="logo-byb" /> */}
      {/* </div> */}
      {/* </FooterContainer> */}
      <FooterContainer>
        <div className="container">
          <div className="row">
            <div className="col justify-content-center grid-center" >
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="grid">
                <h3>
                  Welcome to our site, designed to offer free advice to travelers worldwide.
                </h3>
                <p>
                  Join us in exploring the world on a budget. Your feedback shapes our journey. Project available on <a href="https://github.com/lexvieira/travelonmytrip" target="_blank" rel="noreferrer">GitHub <BsGithub /></a> for coding enthusiasts.
                </p>
                <p>
                  "We're not making a penny from this project, but if you need recommendations, we're here for you! We can connect you with incredibly affordable and reliable travel agencies that'll make your trip a breeze. Their prices are super welcoming, and if you love our suggestions, a tip would make our day! 😊"
                </p>
                <p>
                  Follow me on Instagram to get more updates<span>&nbsp;<a href="https://www.instagram.com/lexoit">@lexoit Alex <AiFillInstagram /></a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col">
            <TipMessage />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col space-evenly1">
              <span>Copyright &copy; 2023 TravelOnMyTrip. <br />All rights reserved</span>
            </div>
            <div className="col d-none">
              <ul className="links">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#services">About</a>
                </li>
                <li>
                  <a href="#recommend">Places</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="social__links">
                <li>
                  <a href="https://www.facebook.com/lexoit/"><BsFacebook /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/lexoit/"><AiFillInstagram /></a>
                </li>
                <li>
                  <a href="https://github.com/lexvieira"><BsGithub /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/lexvieira"><BsLinkedin /></a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=13324550267&text=*Contact%20Alex%20#ILearnByMyself:%20(Write%20your%20text%20here)%0a_________________________%0a"><BsWhatsapp /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </FooterContainer>
    </>

  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
