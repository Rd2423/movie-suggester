import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ADD_USER } from "../utils/mutation";
import Auth from "../utils/auth";
function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });
      if (error) {
        throw new Error("something went wrong");
      }
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="loginPage">
        <div className="container">
          <div className="containerh1">
            <h1>Sign up</h1>
          </div>
          <div className="inputs">
            <form onSubmit={handleFormSubmit}>
              <input
                placeholder="username"
                type="username"
                name="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                placeholder="email"
                type="text"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button type="submit">Enter</button>
            </form>
          </div>
          <div className="signupBtn">
            {/* <Link to="/login">Login Instead</Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
