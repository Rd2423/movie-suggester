import React from "react";
import Auth from "../../utils/auth";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { saveMovieIds, getSavedMovieIds } from "../../utils/localStorage";
import { SAVE_MOVIE } from "../../utils/mutation";
import "../../index.css";
function Movies(props) {
  const [saveMovie, { error }] = useMutation(SAVE_MOVIE);
  const [savedMovieIds, setSavedMovieIds] = useState([]);
  const [err, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1469c0124feb2071e2822b7f4023b656&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setResults(data);
          setIsLoaded(true);
        },

        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {err.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="popular">
          <h1>Popular Movies</h1>
        </div>
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
                  {/* <button 
                // disabled={savedMovieIds?.some((savedMovieId) => savedMovieId === item.id)}
                // onClick={() => handleSaveMovie(item.id)}
                >
                  
                  Save
                </button> */}
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
      </>
    );
  }
}

export default Movies;
