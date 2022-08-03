const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Product {
    _id: ID!
    name: String
    imageUrl: String
    description: String
    price: Int
  }

  type Query {
    products: [Product]
    product(name: String!): Product    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProduct(name: String!, imageUrl: String, description: String!, price:Int): Product
    
  }
  
`;

module.exports = typeDefs;
