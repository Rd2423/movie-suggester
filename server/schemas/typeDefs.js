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
    }

`;
module.exports = typeDefs;