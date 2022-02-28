import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_MOVIE = gql `
  mutation saveMovie($input: savedMovie!) {
    saveMovie($input: $input) {
      _id
      username
      email
      savedMovies {
        movieId
        image
        overview
        title
      }
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation removeMovie($movieId: String!){
    removeMovie(movieId: $movieId){
      _id
      username
      email
      savedMovies {
        movieId
        image
        overview
        title
      }
    }
  }
`