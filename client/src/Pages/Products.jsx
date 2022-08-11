import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Container } from "@mui/material";
import Box from '@mui/material/Box';
import ProductCard from '../Components/ProductCard';
import Price from '../Components/Price';
import Rating from '../Components/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { spacing } from '@mui/system'


import ProductItem from '../Components/ProductCard';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../images/spinner.gif';


const theme = createTheme();

const classes = {
    root: {
        flexGrow: 1
    }
}

//Testing products
const products = [
    {
        id: 1,
        name: 'shoes',
        price: '$35',
        description: 'running shoes',
        image: 'https://picsum.photos/200'
    },
    {
        id: 2,
        name: 'shirt',
        price: '$20',
        description: 'woman\'s shirt',
        image: 'https://placehold.jp/200x200.png'
    },
    {
        id: 3,
        name: 'perfume',
        price: '$40',
        description: 'nike perfume',
        image: 'https://picsum.photos/200'
    },
    {
        id: 4,
        name: 'sweatshirt',
        price: '$25',
        description: 'read sweatshirt',
        image: 'https://placehold.jp/200x200.png'
    },
    {
        id: 5,
        name: 'Macbook',
        price: '$500',
        description: 'Apple brand silver laptop',
        image: 'https://picsum.photos/200'
    },  
    {
        id: 6,
        name: 'Macbook',
        price: '$500',
        description: 'Apple brand silver laptop',
        image: 'https://placehold.jp/200x200.png'
    },
        {
        id: 7,
        name: 'Nice shoes',
        price: '$75',
        description: 'Nice running shoes',
        image: 'https://picsum.photos/200'
    },
    {
        id: 8,
        name: 'Boutique shirt',
        price: '$80',
        description: 'woman\'s shirt',
        image: 'https://placehold.jp/200x200.png'
    },
    {
        id: 9   ,
        name: 'Rare perfume',
        price: '$99',
        description: 'nike perfume',
        image: 'https://picsum.photos/200'
    },
    {
        id: 10,
        name: 'Luxe sweatshirt',
        price: '$85',
        description: 'read sweatshirt',
        image: 'https://placehold.jp/200x200.png'
    },
    {
        id: 11,
        name: 'Maxed Macbook',
        price: '$950',
        description: 'Apple brand silver laptop',
        image: 'https://picsum.photos/200'
    },  
    {
        id: 12,
        name: 'Mega Macbook',
        price: '$1500',
        description: 'Apple brand mega silver laptop',
        image: 'https://placehold.jp/200x200.png'
    },
]

function Products() {
    // const [state, dispatch] = useStoreContext();
  
    // const { currentCategory } = state;
  
    // const { loading, data } = useQuery(QUERY_PRODUCTS);
  
    // useEffect(() => {
    //   if (data) {
    //     dispatch({
    //       type: UPDATE_PRODUCTS,
    //       products: data.products,
    //     });
    //     data.products.forEach((product) => {
    //       idbPromise('products', 'put', product);
    //     });
    //   } else if (!loading) {
    //     idbPromise('products', 'get').then((products) => {
    //       dispatch({
    //         type: UPDATE_PRODUCTS,
    //         products: products,
    //       });
    //     });
    //   }
    // }, [data, loading, dispatch]);
  
    // function filterProducts() {
    //   if (!currentCategory) {
    //     return state.products;
    //   }
  
    //   return state.products.filter(
    //     (product) => product.category._id === currentCategory
    //   );
    // }

// const Products = () => {

    return (
        <ThemeProvider theme={theme}>
            <Container main component="main">
                <CssBaseline />
                
                 <Box
                  sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >   
            <Grid container xs={12} 
            // direction={'column'} 
            // spacing={10} justifyContent={'right'} alignItems={'space between'}
            >
                <Grid item xs={1} s={2}>
                    <Grid item >
                    <Price />
                    </Grid>
                    <Grid item mt={20} >
                    <Rating />
                    </Grid>
                </Grid>
                <Grid container item xs={10} spacing={2} ml
                ={40} mt={-20}>

{/* --CODE FROM EXAMPLE -- */}

                {/* <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div> */}


                {/* --- ORIGINAL CODE BELOW --- */}



                {products.map((product) => (
                    <Grid item key={product.id} xs={12} s={6} md={4} lg={4}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Products;