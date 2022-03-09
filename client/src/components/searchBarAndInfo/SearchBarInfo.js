import React, { useEffect, useState } from "react";

function SearchInfo(props) {
  

  return (
    <div className= "ssearch">
      <div className="searchInfo">
        <div className="searchBar">
          <input
            type="search"
            value={props.value}
            // onSubmit={(e) => setSearchMovie(e.target.value)}
            placeholder="Search for a Movie"
            onChange={(event) => props.setSearchMovie(event.target.value)}
          ></input>
        </div>
      </div>
      <div className="info">
        <p>
          Movie streamz is a movie app
          blablablablablablaablabalbalbalablblablbalabblablalblablablablablablablalna
        </p>
      </div>
      
    </div>
  );
}
export default SearchInfo;
