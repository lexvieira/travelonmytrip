import React from "react";

const SearchBarFilter = (props) => {

    
    return (
        <div className="search d-none1">
            <div className="container">
                <label htmlFor="">Where you want to go</label>
                <input type="text" placeholder="Search Your location" />
            </div>
            <div className="container">
                <label htmlFor="">Check-in</label>
                <input type="date" />
            </div>
            <div className="container">
                <label htmlFor="">Check-out</label>
                <input type="date" />
            </div>
            <button>Explore Now</button>
        </div>
    )
}

export default SearchBarFilter;