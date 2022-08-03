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
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
