import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Price from './Components/Price';
import Rating from './Components/Rating';
// import Footer from './Components/Footer';
import Product from './Components/Product';
import Mission from './Components/Mission';
import Careers from './Components/Careers';
import Contact from './Components/Contact';
import Returns from './Components/Returns';
import Shipping from './Components/Shipping';
import ProductForm from './Components/ProductForm';
import Sort from './Components/Sort';
import Products from './Components/Products';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Sort/> */}
      {/* <Carousel /> */}

{/* --LEFT SIDE PAGE STATIC COMPONENTS-- */}
      {/* <Price /> */}
      {/* <Rating /> */}

{/* --MAIN CONTENT PAGE COMPONENTS-- */}
      {/* <Carousel /> */}
      {/* <Product /> */}
      <Products />
      {/* <ProductForm /> */}
      {/* <Contact /> */}
      {/* <Careers /> */}
      {/* <Mission /> */}
      {/* <Shipping /> */}
      {/* <Returns /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
