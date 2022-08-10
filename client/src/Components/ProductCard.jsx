import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, styled, Checkbox } from '@mui/material';
import { Grid, Container } from "@mui/material";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { AddShoppingCart, Favorite, FavoriteBorder, StarBorder} from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PREFIX = 'MyCard';
const classes = {
 root: `${PREFIX}-root`,
 cardContent: `${PREFIX}-cardContent`,
 cardActions: `${PREFIX}-cardActions`,
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    maxWidth: '100%',
  },  
  [`.${classes.cardContent}`]: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  [`.${classes.cardActions}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const theme = createTheme();

const ProductCard = ({ product }) => {

    return (
      // <ThemeProvider theme={theme}>
      // <Container component="main" maxWidth="xs">
      //     <CssBaseline />
      //     <Box
      //       sx={{
      //         marginTop: 8,
      //         display: 'flex',
      //         flexDirection: 'column',
      //         alignItems: 'center',
      //       }}
      //     >
            <Root className={classes.root}>
            <Card>
                <CardMedia component='img' className={classes.media} image={product.image} title={product.name} />
                <CardContent className={classes.cardContent}>
                        <Typography variant="h6" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h6">
                            {product.price}
                        </Typography>             
                </CardContent>
                <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label='Add to Card'>
                        <AddShoppingCart />
                    </IconButton>
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <StarBorder />
                </CardActions>
            </Card>
        </Root>
        // </Box>
        //     </Container>
        // </ThemeProvider>
    );
}

export default ProductCard;