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
    cart(username: String): [Cart]
    orders(username: String): [Order] 
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProduct(name: String!, imageUrl: String, description: String!, price:Int): Product
    add
    addToCart(username: String!, items[])
    

  }
  
`;

module.exports = typeDefs;
