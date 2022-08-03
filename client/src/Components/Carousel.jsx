import * as React from 'react';
import {ImageList, ImageListItem, Grid} from '@mui/material';
import sales from '../images/sales.jpeg';
import outfit from '../images/outfit.jpg';
import shoes from '../images/shoes.jpg';
import sunglasses from '../images/sunglasses.jpg';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const itemData = [
    {
      img: sales,
      title: 'Special Offer 50% Off Big Sale Today',
      rows: 2,
      cols: 2,
    },
    {
      img: outfit,
      title: 'Watch, pair of pants, shoes, and t-shirt',
    },
    {
      img: shoes,
      title: 'Nike sneakers',
    },
    {
      img: sunglasses,
      title: 'Sunglasses over a shirt and jeans with a cellphone',
      cols: 2
    },
  ];

const Carousel = () => {
    return (
        <Grid
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            marginBottom={20}
        >
        <ImageList
          variant="quilted"
          cols={4}
          rows={2}
          rowHeight={200}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        </Grid>
      ); 
};

export default Carousel;