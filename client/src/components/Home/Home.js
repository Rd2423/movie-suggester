import React from 'react';
import Header from '../header/Header';
import SearchInfo from '../searchBarAndInfo/SearchBarInfo';
import Movies from '../movies/Movies';
function Home () {
    return(
        <>
    <Header />
    <SearchInfo />
    <Movies /> 
    </>
    )
};

export default Home;