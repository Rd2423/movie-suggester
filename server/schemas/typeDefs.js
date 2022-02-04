const {gql} = require('apollo-server-express');

const typeDefs = gql `

    type Query {
        me: User
    }
    type Mutation {
        login(username: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
    }
    type User {
        _id: ID!
        username: String
        email: String
        password: String
    }

`;
module.exports = typeDefs;