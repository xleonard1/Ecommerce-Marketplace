import * as React from 'react';
import { Box, Card, Slider, styled} from '@mui/material';

const PriceCard = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "black",
    border: "1px solid gray",
    height: "50px",
    width: "50px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

const Price = () => {
    return (
        <PriceCard></PriceCard>
    )
}

export default Price;