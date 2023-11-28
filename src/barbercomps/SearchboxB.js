import React from "react";
import "../components/Searchbox.css";

const SearchboxB = ({ onSearchChange }) => {
    return (
        <div className="pad">
            <p className="f3 white">Welcome below are the details.</p>
            <div className="center mad">
                <div className="form pa4 br3 shadow-5 center">
                    <input style={{ color: "black" }} onChange={onSearchChange} className="f4 pa2 w-70 center" type="search" placeholder="search services" />
                </div>
            </div>


        </div>
    );
}

export default SearchboxB;