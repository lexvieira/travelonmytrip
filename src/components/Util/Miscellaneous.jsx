import React  from "react";

export const ReturnUlList = (dataObjectArray:[], activeRegion:number, setActiveRegion:any) => {
    return (
      <ul>
        {
          dataObjectArray.map((dataObject:any, index) => {
            return (
              <li key={index}
                className={activeRegion === index + 1 ? "active" : ""}
                onClick={() => setActiveRegion(index + 1)}
              >
                {dataObject.region}
              </li>
            );
          })}
      </ul>
    )
  }