import React, { useEffect, useState } from "react";
import SearchInfo from '../components/searchBarAndInfo/SearchBarInfo';
import Movies from '../components/movies/Movies';
function Home () {
    const [moviess, setMoviess] = useState([]);
  const [searchMoviee, setSearchMovie] = useState("");
  const searchMovie = async (searchName) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=1469c0124feb2071e2822b7f4023b656&query=`+searchName +`&page=1`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.results) {
      setMoviess(responseJSON.results);
    }
  };
  useEffect(() => {
    searchMovie(searchMoviee);
  }, [searchMoviee]);
    return(
        <>
    <SearchInfo searchMoviee={searchMoviee} setSearchMovie={setSearchMovie} />
    <div className="searchMovieee">
        <h1>{moviess.length ? `Viewing ${moviess.length} results for "${searchMoviee}"` : null}</h1>
         {moviess.map((item) => (
             <div className="movies">
             <img
             key={item.poster_path}
             src={"https://image.tmdb.org/t/p/w200" + item.poster_path}
           />
           <h3 key={item.original_title}>{item.original_title}</h3>
                <p key={item.overview}>{item.overview}</p>
                </div>
         ))}
      </div>
    <Movies /> 
    </>
    )
};

export default Home;