import React from "react";
import "../../index.css";
import {Link} from 'react-router-dom';
import Auth from "../../utils/auth";
const image = require("../../img/film-reel.png");

function Header() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }
  return (
    <header className="header">
      <div className="header_left">
        <img src={image} width="50" alt="movie icon"/>
      </div>
      <div className="header_middle">
        <a href="/">HOME</a>
        <a href="/">MOVIES</a>
        
      </div>
      <div className="header_right">
        {Auth.loggedIn() ? (
          <>
          <a>My movies</a>
          <a href="/" onClick={logout}>
            Logout
          </a>
          </>
        ):(
          <>
          <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
