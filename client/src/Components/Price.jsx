import * as React from "react";
import { Box, Card, Slider, styled, Typography } from "@mui/material";

const PriceCard = styled("div")(({ theme }) => ({
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

const PriceHeader = styled("div")(({ theme }) => ({
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
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const Price = () => {
  return (
    <PriceCard>
      <PriceHeader>
        <Typography variant="h6" margin="5px" padding="3px">
          Price
        </Typography>
      </PriceHeader>
     
        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
          sx={{ width: 200, width: '90%' }}
        />

    </PriceCard>
  );
};

export default Price;
