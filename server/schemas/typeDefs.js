const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Category {
  _id: ID
  name: String
  }


  type Cart {
    _id: ID!
    products:[Product]
    bill: Int
  }

  type Order {
    _id: ID!
    userId: User
    products:[Product]
    bill: Int
    date_added: String
  }

  type User {
    _id: ID
    username: String
    email: String
    orders:[Order]
  }
  
   type Product {
    _id: ID!
    name: String
    imageUrl: String
    description: String
    quantity: Int
    price: Float
    category: Category
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(name: String!): Product 
    user(username: String): User  
    cart(id: ID!): [Cart]
    orders(id: ID!): [Order] 
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProduct(_id: ID, name: String, description: String!, price: Float, category: ID!): Product
    updateProduct(_id: ID!, quantity: Int!): Product
    updateUser(username: String!, email: String, password: String): User
     addToCart(products: [ID]!): Cart
     updateCart(id:ID!): Cart
    addOrder(products: [ID]!): Order
  }
  
`;

module.exports = typeDefs;
