// required needed dependecies 
const express = require("express");
const path = require("path");
const { ApolloServer } = require('apollo-server-express');

// const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const auth = require("./utils/auth");

const PORT = process.env.PORT || 3002;
const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(require('./routes'));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });


//   })
//   };

// db.once('open', () => {

// });

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
})
  // Call the async function to start the server
  // startApolloServer(typeDefs, resolvers);
