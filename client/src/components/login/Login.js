import React from 'react';
import '../login/index.css'
function LoginPage () {
    return(
        <div className="loginPage">
            <div className="container">
                <div className="containerh1">
                <h1>Login</h1>
                </div>
                <div className="inputs">
                <input placeholder="username" type="text"/>
                <input placeholder="********" type="password"/>  
                <button>Login</button>
                </div>
                <div className="signupBtn">
                <a>Sign Up</a>
                </div>
            </div>
         </div>
    )
}

export default LoginPage;