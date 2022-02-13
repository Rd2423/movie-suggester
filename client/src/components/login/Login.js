import React, { useState } from 'react';
import '../login/index.css'
import {Link} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {LOGIN_USER} from '../../utils/mutation';

function LoginPage (props) {
    const [formState, setFormState] = useState({email:"", password:""});
    const [login, {error}] = useMutation(LOGIN_USER);
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await login({
            variables: { ...formState },
          });
    
          login(data.login);
        } catch (e) {
          console.error(e);
        }
      };
    return(
        <form className="loginPage" onSubmit={handleFormSubmit}>
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
                <Link to="/signup">Sign Up</Link>
                </div>
            </div>
         </form>
    )
}

export default LoginPage;