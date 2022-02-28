import React from "react";
import Auth from "../../utils/auth";
import { useState, useEffect } from "react";
import "../../index.css";
function Movies() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState("");
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1469c0124feb2071e2822b7f4023b656&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setResults(data);
          setIsLoaded(true);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Movies_section">
        {Auth.loggedIn() ? (
          <>
            {results.results.map((item) => (
              <div className="movies">
                <img
                  key={item.poster_path}
                  src={"https://image.tmdb.org/t/p/w200" + item.poster_path}
                />
                <h3 key={item.original_title}>{item.original_title}</h3>
                <p key={item.overview}>{item.overview}</p>
                <button>Save</button>
              </div>
            ))}
          </>
        ) : (
          <>
            {results.results.map((item) => (
              <div className="movies">
                <img
                  key={item.poster_path}
                  src={"https://image.tmdb.org/t/p/w200" + item.poster_path}
                />
                <h3 key={item.original_title}>{item.original_title}</h3>
                <p key={item.overview}>{item.overview}</p>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default Movies;
