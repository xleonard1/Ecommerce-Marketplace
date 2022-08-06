import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import product from './Product';


const ProductCard = () => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
        </Card>
    );
}

export default ProductCard;