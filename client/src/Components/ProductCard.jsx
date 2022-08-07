import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, styled, Checkbox } from '@mui/material';
import { AddShoppingCart, Favorite, FavoriteBorder, StarBorder} from '@mui/icons-material';

const PREFIX = 'MyCard';
const classes = {
 root: `${PREFIX}-root`,
 cta: `${PREFIX}-cta`,
 content: `${PREFIX}-content`,
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    maxWidth: '100%',
    margin: '10px'
  },
[`&.${classes.media}`]: {
   paddingTop: '56.25%', 
  },
  [`&.${classes.cardContent}`]: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  [`&.${classes.cardActions}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const ProductCard = ({ product }) => {

    return (
        <Root className={classes.root}>
            <Card>
                <CardMedia component='img' className={classes.media} image={product.image} title={product.name} />
                <CardContent className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price}
                        </Typography>             
                </CardContent>
                <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label='Add to Card'>
                        <AddShoppingCart />
                    </IconButton>
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <StarBorder />
                </CardActions>
            </Card>
        </Root>
    );
}

export default ProductCard;