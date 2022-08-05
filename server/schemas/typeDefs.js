const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Category {
  _id: ID
  name: String
  }


  type Cart {
    _id: ID!
    products:[Product]
    bill: Number
  }

  type Order {
    _id: ID!
    products:[Product]
    bill: Number
    date_added: Date
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String

    orders:[Orders]

  }
  
   type Product {
    _id: ID!
    name: String
    imageUrl: String
    description: String
    quantity: Int
    price: Int
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
    user: User  
    cart(id: ID!): [Cart]
    orders(id: ID!): [Order] 
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProduct(_id: ID!, imageUrl: String, description: String!, price:Int): Product
    updateProduct(_id: ID!, quantity: Int!): Product
    updateUser(username: String!, email: String, password: String): User
    addToCart(products: [ID]!): Cart
    updateCart(id:ID!): Cart
    addOrder(products: [ID]!): Order
  }
  
`;

module.exports = typeDefs;
