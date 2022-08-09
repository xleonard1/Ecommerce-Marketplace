import * as React from "react";
import { Slider, styled, Typography, Card } from "@mui/material";
import { Box } from "@mui/system";

const PriceCard = styled(Card)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
//   alignItems: "flex-start",
  border: "1px solid gray",
  margin: "10px",
  height: "150px",
  width: "250px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const PriceHeader = styled('div')(({ theme }) => ({
  position: "relative",
  // display: "flex",
  alignItems: "flex-start",
  borderBottom: "1px solid grey",
  borderRadius: "inherit",
  background: "#D3D3D3",
  height: "50px",
  width: "250px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const marks = [
  {
    value: 1,
    label: "$1",
  },
  {
    value: 100,
    label: "$100",
  },
];

function valuetext(value) {
  return `$${value}`;
}

const Price = () => {
  return (
    <PriceCard>
      <PriceHeader>
        <Typography variant="h6" margin="5px" padding="3px">
          Price
        </Typography>
      </PriceHeader>
        <Box fontWeight={'bold'} marginTop={2}>
        <Slider
          aria-label="Custom marks"
          defaultValue={1}
          getAriaValueText={valuetext}
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          sx={{ width: '80%' }}
        />
        </Box>

    </PriceCard>
  );
};

export default Price;
