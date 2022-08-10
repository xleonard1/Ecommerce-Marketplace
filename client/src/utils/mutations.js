import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String
    $description: String!
    $price: Float
    $category: ID!
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      category: $category
    ) {
      _id
      name
      description
      price
      category {
        name
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
      }
    }
  }
`;
