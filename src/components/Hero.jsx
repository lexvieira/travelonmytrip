import React from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";
import SearchBar from "./Util/Search";
import { BsGithub } from "react-icons/bs";
export default function Hero(props) {
  return (
    <>
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Venturing Beyond Borders: Exploring the World</h1>
          <p>
            Embarking on a journey beyond Brazil, I've traversed diverse destinations, propelled by an insatiable passion for exploration.
          </p>
          <p></p>
          <p>Stay connected for forthcoming adventures, as the odyssey continues.</p>
          <p></p>
          <h2>Enjoy the journey!</h2>
        </div>
        <SearchBar className="d-none" />
      </div>
    </Section>
    <Section>
        <div className="container content1 welcome-message" id="welcome">
          <h2>
            Welcome, adventurers! 🌍✨ 
          </h2>
          <p>
            We're thrilled to present our beta version – a platform ready to embark on journeys with you. While we fine-tune, this space is dedicated to helping explorers like you navigate the world cheap, funny and safe. Your feedback will shape our expedition, making every step together more remarkable. Begin your adventure and let's explore the globe!
          </p>
          <p>
            Here's a glimpse of my Southeast Asia adventure! Stay tuned for more details, galleries, and my European escapades coming soon 😃.
          </p>
          <p>
            Project available on <a href="https://github.com/lexvieira/travelonmytrip" target="_blank" rel="noreferrer" >Git Hub <BsGithub /></a> for students.
          </p>
        </div>         
    </Section>    
    </>

  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .welcome-message {
    color: #026e78ff;
    margin: 50px 20%;
    // text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    h2 {
      margin-bottom: 10px;
      font-size: 25px;
    }
    p {
      font-size: auto;
      margin-bottom: 5px;
    }
  }
  .d-none {
    display: none!important;
  }
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 20rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .welcome-message {
      margin: 20px 5%;  
      h2 {
        margin-bottom: 10px;
        font-size: 20px;
      }
    }    
    .content {
      .title {
        h1 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
