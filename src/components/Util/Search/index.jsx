import React from "react";

const SearchBar = (props) => {
    const classNames = props.className;
    return (
        <>
            <div className={`search ${classNames}`}>
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
        </>
    )
}

export default SearchBar;