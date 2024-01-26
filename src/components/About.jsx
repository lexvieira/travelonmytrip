import React from "react";
import styled from "styled-components";
// import homeImage2 from "../assets/20221012_huayxai_sunset.webp";
import SearchBar from "./Util/Search";
import { BsGithub } from "react-icons/bs";
// import ComingSoonMessage from "./Util/ComingSoonMessage";
import TipMessage from "./Util/Tip";
import avatarImage from "../assets/alex.webp";
export default function About(props) {
  return (
    <>
      <Section>
        <div className="container content1 welcome-message" id="welcome">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center messagePersonal">
              <img src={avatarImage} className="image" alt="" width="250" />
              <div className="message">
                <p>
                  Transforming from introverted to extroverted, breaking boundaries, learning new languages, and connecting with people from diverse cultures.
                </p>
                <p>
                  Everyone has the potential to learn anything they desire, given the will to do so.
                </p>
              </div>
            </div>
          </div>
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
  .messagePersonal {
    padding: 40px!important;
    img {
      padding: 30;
    }
    .message {
      padding: 0 150px 0 50px !important;
    }
  }
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
    height: 50%;
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
  @media screen and (min-width: 280px) and (max-width: 800px) {
    .messagePersonal {
      padding: 40px!important;
      img {
        padding: 30;
      }
      .message {
        padding: 0 70px 0 50px !important;
      }
    }  
  }
  @media screen and (min-width: 280px) and (max-width: 579px) {
    .messagePersonal {
      display: grid!important;
      justify-items: center!important;  
      padding: 30px 0px !important;
      img {
        padding: 30;
      }
      .message {
        padding: inherit;
        padding: 0px !important;
        margin-top: 30px;
      }
    } 
    .background {
      // background-color: palegreen;
      img {
        height: 100vw;
        border-radius: 15px;
        object-fit: cover;
      }
    }  
  }
  @media screen and (min-width: 580px) and (max-width: 980px) {
    .background {
      // background-color: palegreen;
      img {
        height: 50vw;
        border-radius: 15px;
        object-fit: cover;
      }
    }    
  }  
  @media screen and (min-width: 280px) and (max-width: 980px) {
    // height: 20rem;
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
