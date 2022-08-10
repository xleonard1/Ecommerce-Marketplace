import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID, $name: String) {
    products(category: $category, name: $name) {
      _id
      name
      description
      price
      quantity
      imageUrl
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = `gql
{
  products {
    _id
    name
    description
    price
    quantity
    category {
      name
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String) {
    user(username: $username) {
      _id
      username
      orders {
        _id
        date_added
        products {
          _id
          name
          description
          price
          quantity
          imageUrl
        }
      }
    }
  }
`;
