import React, { useState, useEffect } from "react";
import styled from "styled-components";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import RecommendedDestinations from "../data/recommendations.json"
import RenderSelectList from "./Util/SelectListRegion";
import GetImageSrc from "./Util/GetImageSrc";

export default function Recommend(props) {
  const [activeCountry, setActiveCountry] = useState(Number(1));
  const [activeRegion, setActiveRegion] = useState(Number(1));
  const [dataRegion, setDataRegion] = useState([]);
  const [dataPlaces, setDataPlaces] = useState([]);

  const UpdateActiveCountry = (indexCountry) => {
    setActiveCountry(indexCountry);
    setActiveRegion(1);
  }


  const UpdateActiveRegion = (e) => {
    setActiveRegion(e.target.value);
  }

  useEffect(() => {
    const LoadingDataRegions = () => {
      const selectedCountry = RecommendedDestinations.filter((country, index) => (index + 1) === parseInt(activeCountry));
      setDataRegion(selectedCountry[0].data)
      const selectedRegion = selectedCountry[0].data.filter((regions, index) => (index + 1) === parseInt(activeRegion))[0]
      setDataPlaces(selectedRegion)
    }    
    LoadingDataRegions()
  }, [activeCountry, activeRegion, dataRegion, dataPlaces])

  // const RenderSelectList = (props) => {
  //   const countryIndex = props.country;
  //   const dataRegion = props.dataRegion;
  //   const onSelectChange = props.onSelectChange
  //   const selectedOption = props.selectedOption
  //   return (
  //     <select id="selectRegion" onChange={onSelectChange}
  //       value={selectedOption}
  //     >
  //       {dataRegion.map((region, index) => {
  //               return (
  //                 <option key={index} value={index + 1}
  //                 >
  //                   {region.region}
  //                 </option>                   
  //               )

  //       })}
  //     </select>
  //   )
  // }

  const RenderCountryInfo = (props) => {
    const countryIndex = props.countryIndex;
    // const dataRegion = props.dataRegion;
    const filteredCountry = RecommendedDestinations.filter((country, index) => (index + 1) === countryIndex);
    // setDataRegion(filteredCountry[0].data);
    return (
      filteredCountry.map((country) => {
        return (
          <div className="row" key={countryIndex}>
            <div className="col">
              <div className="region-description">
                  <h1>{country.country}</h1>
                  <p>{country.description}</p>
                  <p>
                    <a href={country.linkreadmore}>{country.source}</a>
                </p>
              </div>
            </div>
            <div className="col justity-content-center d-flex destinations">
              <div className="destination">
                <img src={country.image} alt={country.country} className="destination-image-fit" />
              </div>                  
          </div>          
          </div>
        )
      })

    )

  }

  const RenderPlaces = (properties) => {
    // const selectedRegion = properties.selectedRegion;
    const dataPlaces = properties.dataPlaces;
    // console.log(dataPlaces)
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="region-description">
                <p>
                  {dataPlaces.description}
                </p>
                <p>
                  <a href={dataPlaces.linkreadmore}>{dataPlaces.source}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="destinations">
          {dataPlaces.data?.map((place, index) => {
            // console.log(place.title)
            return (
              place.visible === true ?
                <div className="destination" key={index}>
                  {/* {data[Math.floor(Math.random() * 5) + 1].image} */}
                  {place.image !== "" ?
                    <GetImageSrc src={place.image} alt="" className="destination-image-fit" />
                    :
                    place.iframe.src ?
                      <iframe src={place.iframe.src} loading={place.iframe.loading} referrerpolicy={place.iframe.referrerpolicy} frameborder="0" height={place.iframe.height} title={"Maps Location"}></iframe>
                      : null
                  }

                  <h3>{place.title}</h3>
                  <p>{place.subtitle}</p>
                  <div className="info">
                    <div className="services">
                      <img src={info1} alt="" />
                      <img src={info2} alt="" />
                      <img src={info3} alt="" />
                    </div>
                    <h4>{place.cost}</h4>
                  </div>
                  <div className="distance">
                    <span><a href={place.link} target="_blank" rel="noopener noreferrer" >Click and Go!</a> </span>
                  </div>
                </div>
                : null
            )
          })}
        </div>
      </>

    )


  }

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {RecommendedDestinations.map((data, index) => {
            return (
              <li key={index}
                className={activeCountry === index + 1 ? "active" : ""}
                onClick={() => UpdateActiveCountry(index + 1)}
              >
                {data.country}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container">
        <RenderCountryInfo countryIndex={activeCountry} />
        <div className="row">
          <div className="col justify-content-center">
            <div className="title">
              <h1>Provinces/Regions/Cities</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col justify-content-center align-items-center d-flex">
            <h4>Select the Region:&nbsp;</h4>
            <RenderSelectList country={activeCountry} dataRegion={dataRegion} onSelectChange={UpdateActiveRegion} selectedOption={activeRegion} />
          </div>
        </div>

      </div>
      <RenderPlaces selectedRegion={activeRegion} dataPlaces={dataPlaces} />

    </Section>
  );

}

const Section = styled.section`
  padding: 1rem 0;
  .title { 
    text-align: center;
  }
  h1, h2, h3 {
    margin: 10px 0;
  }
  select {
    border 2px solid #8338ec;
    border-radius: 50px;
    padding: 10px;
    font-weight: bold;
  }
  select option {
    font-weight: bold;
    border: 0px;
  }
  .v-align-center {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
  .region-description {
    margin: 25px 5%;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .countries {
    .visible {
      display: contents!important;
    }
    .invisible {
      display: none!important;
    }
  }
  .regions {
    .visible {
      display: contents!important;
    }
    .invisible {
      display: none!important;
    }   
  }  
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .visible {
      display: contents!important;
    }
    .invisible {
      display: none!important;
    }            
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      iframe {
        height: 100%;
        border-radius: 1rem;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
      .destination-image-fit{
        object-fit: cover;
        height: 390px;
        border-radius: 12px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .region-description {
      margin: 30px 5%;
    }
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
          cursor: pointer;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1500px) {
    .welcome-message {
      margin: 40px 5%;
    }
    .region-description {
      margin: 30px 5%;
    }
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
          cursor: pointer;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: repeat(2,1fr);
      padding: 0;
    }
  }

  
`;
