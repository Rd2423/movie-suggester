const {gql} = require('apollo-server-express');

const typeDefs = gql `

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }
    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveMovie(input: savedMovie!): User
        removeMovie(movieId: String!): User
    }
    type Auth {
        token: ID!
        user: User
    }
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedMovies: [Movie]
    }
    type Movie {
        movieId: String
        photo: String
        title: String
        overview: String
    }
    input savedMovie {
        photo: String
        title: String
        overview: String
        movieId: String
    }

`;
module.exports = typeDefs;