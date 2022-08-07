import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --Import Components--

import Header from './Components/Header';
import Carousel from './Components/Carousel';
// import Price from './Components/Price';
import Rating from './Components/Rating';
import Footer from './Components/Footer';

// --Import Pages--

import Home from './Pages/Home';
import Product from './Pages/Product';
import Mission from './Pages/Mission';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import Returns from './Pages/Returns';
import Shipping from './Pages/Shipping';
import ProductForm from './Pages/ProductForm';
import SellWithUs from './Pages/SellWithUs';
import Oops404 from './Pages/Oops404';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (

<ApolloProvider client={client}>
  <Router>
    <div className="App flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        {/* Wrap Route elements in a Routes component */}
        <Routes>


{/*   --COMPONENTS-- */}
      {/* <Price /> */}
      {/* <Rating /> */}
      {/* <Carousel /> */}

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

      <Route 
      path="/contact" 
      element={<Contact />} 
      />

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
    </ApolloProvider>
  );
}

export default App;
