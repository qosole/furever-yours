import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      _id
      name
      email
      password
      pets {
        petId
        apiId
        species
        breed
        name
        age
        sex
        color
        location
        city
        state
        pros
        cons
        addedAt
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      pets {
        petId
        apiId
        species
        breed
        name
        age
        sex
        color
        location
        city
        state
        pros
        cons
        addedAt
      }
    }
  }
`;
