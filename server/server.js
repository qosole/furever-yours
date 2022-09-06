const express = require("express");
const path = require("path");
const { ApolloServer } = require('apollo-server-express');


const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const auth = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(require('./routes'));



app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
})
