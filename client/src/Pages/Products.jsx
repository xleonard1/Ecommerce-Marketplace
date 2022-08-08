import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Container } from "@mui/material";
import ProductCard from '../Components/ProductCard';
import Price from '../Components/Price';
import Rating from '../Components/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

//Testing products
const products = [
    {
        id: 1,
        name: 'shoes',
        price: '$35',
        description: 'running shoes',
        image: 'https://placehold.jp/200x200.png'
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
        image: 'https://placehold.jp/200x200.png'
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
        image: 'https://placehold.jp/200x200.png'
    },
    {
        id: 6,
        name: 'Macbook',
        price: '$500',
        description: 'Apple brand silver laptop',
        image: 'https://placehold.jp/200x200.png'
    },
]


const Products = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container direction={'column'} spacing={10}>
                <Grid item >
                    <Price />
                </Grid>
                <Grid item >
                    <Rating />
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} s={6} md={4} lg={1}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    );
};

export default Products;