import React, { component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --Import Components--

import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Price from './Components/Price';
import Rating from './Components/Rating';
import Footer from './Components/Footer';
import Sort from './Components/Sort';
import productCard from './Components/ProductCard';


// --Import Pages--

import Home from './Pages/Home';
import Product from './Pages/Product';
import Products from './Pages/Products';
import Mission from './Pages/Mission';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import Returns from './Pages/Returns';
import Shipping from './Pages/Shipping';
import ProductForm from './Pages/ProductForm';
import SellWithUs from './Pages/SellWithUs';
import Oops404 from './Pages/Oops404';
import Login from './Pages/Login';
import Shoes from './Pages/Shoes';
import Bags from './Pages/Bags';
import Clothing from './Pages/Clothing';
import Electronics from './Pages/Electronics';
import Dashboard from './Pages/Dashboard';
import {StoreProvider} from './utils/GlobalState'

import './App.css';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {

  return (

<ApolloProvider client={client}>
  <StoreProvider>
  <Router>
    <div className="App flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        {/* Wrap Route elements in a Routes component */}
        <Routes>



{/* --MAIN CONTENT PAGE COMPONENTS-- */}
          {/* Define a default route that will render the Home component */}
          <Route 
            path="/" 
            element={<Home />} 
          />

      {/* Define a route that will take in variable data */}
      {/* USE THIS ROUTE TO SHOW INDIVIDUAL PRODUCT BY ID */}
      {/* <Route 
      path="/products/:productId" 
      element={<Product />} 
      /> */}

      {/* --Example product route - delete once variable product is set up-- */}
      <Route 
      path="/product" 
      element={<Product />} 
      />

      <Route 
      path="/products" 
      element={<Products />} 
      />


      <Route 
      path="/add-product" 
      element={<ProductForm />} 
      />


      <Route 
      path="/login" 
      element={<Login />} 
      />

      <Route 
      path="/dashboard" 
      element={<Dashboard />} 
      />

      {/* <Route 
      path="/contact" 
      element={<Contact />} 
      /> */}

      <Route 
      path="/careers" 
      element={<Careers />} 
      />

      <Route 
      path="/mission" 
      element={<Mission />} 
      />

      <Route 
      path="/sell-with-us" 
      element={<SellWithUs />} 
      />

      <Route 
      path="/shipping" 
      element={<Shipping />} 
      />

  <Route 
      path="/returns" 
      element={<Returns />} 
      />    

      <Route 
      path="/shoes" 
      element={<Shoes />} 
      />

      <Route 
      path="/bags" 
      element={<Bags />} 
      />

      <Route 
      path="/clothing" 
      element={<Clothing />} 
      />

      <Route 
      path="/electronics" 
      element={<Electronics />} 
      />

      <Route 
      path="*" 
      element={<Oops404 />} 
      />


      </Routes>
    </div>
    <div>
      <Footer /> 
    </div>

    </div>
    </Router>
    </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
