const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        pets: [Pet]!
        password: String
        location: String
    }

    type Pet {
        petId: ID
        apiId: Number
        species: String
        breed: String
        name: String
        age: String
        sex: String
        color: String
        location: String
        city: String
        state: String
        pros: String
        cons: String
        addedAt: Date
    }

    type Query {
        Users: [User]!
        User(userId: ID!): User
    }

`;

module.exports = typeDefs