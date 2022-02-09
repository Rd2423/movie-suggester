const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();

    server.applyMiddleware({app});
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

app.use(express.urlencoded({extended: true}));
app.use(express.json());


startServer();
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});