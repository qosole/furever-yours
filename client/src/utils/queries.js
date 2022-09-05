import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query getUsers {
    Users {
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

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(userId: $userId) {
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
