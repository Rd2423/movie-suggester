import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutation";
import Auth from "../utils/auth";
function LoginPage(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const {data} = await login({
        variables: { ...formState },
      });
      if(error) {
        throw new Error("something went wrong");
      }
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    setFormState({
      username: "",
      password: "",
    });
  };
  return (
    <>
      <form className="loginPage" onSubmit={handleFormSubmit}>
        <div className="container">
          <div className="containerh1">
            <h1>Login</h1>
          </div>
          <div className="inputs">
            <input
              placeholder="username"
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
            <input
              placeholder="********"
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </div>
          <div className="signupBtn">
            <Link to="/signup">Sign Up Instead</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
