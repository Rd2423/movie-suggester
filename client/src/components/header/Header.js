import React from "react";
import "../../index.css";
import {Link} from 'react-router-dom';

const image = require("../../img/film-reel.png");

function Header() {
  return (
    <header className="header">
      <div className="header_left">
        <img src={image} width="50" alt="movie icon"/>
      </div>
      <div className="header_middle">
        <a href="">HOME</a>
        <a href="">MOVIES</a>
        <a href="">TV SHOWS</a>
      </div>
      <div className="header_right">
          <Link to="/login">Login</Link>
      </div>
    </header>
  );
}

export default Header;
