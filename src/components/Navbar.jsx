import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import logo from "../assets/logo.webp";
import logo from "../assets/logo-text.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { BsLinkedin, BsFacebook, BsWhatsapp, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';


export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const location = useLocation();
  // Mixing Techiniques using UseState and UseLocation to check the active links
  useEffect(() => {
    setActiveMenu(location.pathname.replace("/","") === "" ? "home" : location.pathname.replace("/",""));
  },[activeMenu, location.pathname])

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container-brand">
            <img src={logo} alt="" />
            <h3 className="logo">(Beta)</h3>
          </div>
          <div className="toggle d-none">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <Link to="/" onClick={() => setActiveMenu("home")} className={activeMenu === "home" ? "active" : ""}>Home</Link>
          </li> 
          <li>
            <Link to="/about" onClick={() => setActiveMenu("about")} className={activeMenu === "about" ? "active" : ""}>About</Link>
          </li>
          <li className="d-none">
            <Link to="/places" onClick={() => setActiveMenu("places")} className={activeMenu === "places" ? "active" : ""}>Places</Link>
          </li>
          <li className="d-none">
            <Link to="/services" onClick={() => setActiveMenu("services")} className={activeMenu === "services" ? "active" : ""}>services</Link>
          </li>
        </ul>
        <ul className="social__links">
          <li>
            <a href="https://www.facebook.com/lexoit/" target="_blank" rel="noopener noreferrer" ><BsFacebook /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/lexoit/" target="_blank" rel="noopener noreferrer" ><AiFillInstagram /></a>
          </li>
          <li>
            <a href="https://github.com/lexvieira" target="_blank" rel="noopener noreferrer" ><BsGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lexvieira" target="_blank" rel="noopener noreferrer" ><BsLinkedin /></a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=13324550267&text=*Contact%20Alex%20#ILearnByMyself:%20(Write%20your%20text%20here)%0a_________________________%0a" target="_blank" rel="noopener noreferrer" ><BsWhatsapp /></a>
          </li>
        </ul>
        <button style={{display:"none"}}>Connect</button>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: #4468e2;
  }
  .brand {
    .container-brand {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
        &.active {
          color: #023e8a;
          font-weight: 900;
        }
      }
      // &:first-of-type {
      //   a {
      //     color: #023e8a;
      //     font-weight: 900;
      //   }
      // }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;
