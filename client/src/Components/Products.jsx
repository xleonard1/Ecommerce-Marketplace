import React from "react";
import { Grid } from "@mui/material";
import ProductCard from './ProductCard';


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

]


const Products = () => {
    return (
        <main>
            <Grid container justifyContent={'center'} spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} s={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;