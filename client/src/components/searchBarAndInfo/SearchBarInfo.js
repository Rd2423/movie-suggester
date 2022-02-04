import React from 'react';
import {useState, useEffect} from 'react';

function searchInfo () {
    // const [results, setResults] = useState('')
    // useEffect(() => {
    //     fetch(
    //         "https://api.themoviedb.org/3/search/movie?api_key=1469c0124feb2071e2822b7f4023b656&query="
    //     )
    // })

    return(
        <div>
        <div className= "searchInfo">
            <div className="searchBar">
                <input type="text" placeholder="Search for a Movie/TV Show!" />
                <button>Search</button>
            </div>
        </div>
            <div className="info">
                <p>Movie streamz is a movie app blablablablablablaablabalbalbalablblablbalabblablalblablablablablablablalna</p>
            </div>
            </div>
    )
}
export default searchInfo;