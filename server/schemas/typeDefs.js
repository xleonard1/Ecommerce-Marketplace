const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Cart {
    _id: ID!
    username: String
    items [
      productId: String
      quantity: Number
      price: Number
    ]
    bill: Number
  }

  type Order {
    _id: ID!
    username: String
    items [
      productId: String
      quantity: Number
      price: Number
    ]
    bill: Number
    date_added: Date
  }

  type Query {
    cart(username: String): [Cart]
    orders(username: String): [Order]
  }

  type Mutation {
   createOrder
   addToCart
   
  }
`;

module.exports = typeDefs;
