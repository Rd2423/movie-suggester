import React from 'react';
import {Link} from 'react-router-dom';
function Signup (){
    return (
        <div className="loginPage">
            <div className="container">
                <div className="containerh1">
                <h1>Sign up</h1>
                </div>
                <div className="inputs">
                <input placeholder="username" type="text"/>
                <input placeholder="email" type="text"/>
                <input placeholder="********" type="password"/>  
                <button>Enter</button>
                </div>
                <div className="signupBtn">
                <Link to="/login">Login</Link>
                </div>
            </div>
         </div>
    )
}

export default Signup;