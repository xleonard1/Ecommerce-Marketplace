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
// import Login from './Pages/Login';
// import Dashboard from './Pages/Dashboard';

import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <Header/>

{/* --LEFT SIDE PAGE STATIC COMPONENTS-- */}
      {/* <Price /> */}
      <Rating />

{/* --MAIN CONTENT PAGE COMPONENTS-- */}
      <Carousel />
      <Product />
      <ProductForm />
      <Contact />
      <Careers />
      <Mission />
      <Shipping />
      <Returns />
      <Footer />
    </div>
  );
}

export default App;
