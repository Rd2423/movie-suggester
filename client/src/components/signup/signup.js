import React from 'react';

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
                <button>Login</button>
                </div>
                <div className="signupBtn">
                <a>Sign Up</a>
                </div>
            </div>
         </div>
    )
}

export default Signup;