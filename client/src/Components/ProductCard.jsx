import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, styled, Checkbox } from '@mui/material';
import { Grid, Container } from "@mui/material";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { AddShoppingCart, Favorite, FavoriteBorder, StarBorder} from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { sizing, maxHeight, minHeight } from '@mui/system';

import { useStoreContext } from "../utils/GlobalState";
import {
  ADD_TO_CART,
} from "../utils/actions";
// import cookieTin from "../images/cookie-tin.jpg";
// import alphabetBlocks from "../images/alphabet-blocks.jpg";
// import bedtimeBook from "../images/bedtime-book.jpg";
// import camera from "../images/camera.jpg";
// import cannedCoffee from "../images/canned-coffee.jpg";
// import plasticHorses from "../images/plastic-horses.jpg";
// import soap from "../images/soap.jpg";
// import spinningTop from "../images/spinning-top.jpg";
// import tablet from "../images/tablet.jpg";
// import teddyBear from "../images/teddy-bear.jpg";
// import toiletPaper from "../images/toilet-paper.jpg";
// import woodenSpoons from "../images/wooden-spoons.jpg";

const PREFIX = 'MyCard';
const classes = {
 root: `${PREFIX}-root`,
 cardContent: `${PREFIX}-cardContent`,
 cardActions: `${PREFIX}-cardActions`,
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    maxWidth: '100%',
    // Height: '100%'
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
  const [state, dispatch] = useStoreContext();
  const handleAddToCart = () => {
    // dispatch adding an item to cart
    dispatch({
      type: ADD_TO_CART,
      product
    })
  }

    return (
            <Root className={classes.root}>
            <Card sx={{ border: '1px solid black', margin: "1px"}}>
                <CardMedia height="250"
                  component='img' 
                  className={classes.media}  
                  title={product.name} 
                  image={product.image
                  ?.length
                  ? product.image
                  : "https://dummyimage.com/250/000000/ffffff)"
                  }
                  />
              <Box
              sx={{
             maxHeight: 250,
             minHeight: 250,
             background: "lightGrey"
              }}
              >
                <CardContent className={classes.cardContent}>
                        <Typography variant="h6" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h6">
                            {product.price}
                        </Typography>             
                </CardContent>
                <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
                {/* </Box> */}
                <CardActions disableSpacing className={classes.cardActions}>
                  <div mb={0}>
                    <IconButton aria-label='Add to Cart' onClick={handleAddToCart}>
                        <AddShoppingCart />
                    </IconButton>
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    {/* <StarBorder /> */}
                    </div>
                </CardActions>
                </Box>
            </Card>
        </Root>
      
      //  </Container>
      //    </ThemeProvider>
    );
}

export default ProductCard;