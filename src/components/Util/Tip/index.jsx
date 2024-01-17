import React from 'react';
import IconBMC from "../../../assets/bmc.png";


const TipMessage = () => {
    return (
      <div>
        <p className="align-items-center d-flex">
        Enjoy our content? How about a virtual coffee or beer to keep the exploration alive? &nbsp;<a href="https://www.buymeacoffee.com/lexvieira" target="_blank" rel="noopener noreferrer">
            <img src={IconBMC} alt="Buy Me a Coffee" width="140"/>
          </a>
        </p>
      </div>
    );
  };
  
  export default TipMessage;