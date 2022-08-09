import * as React from "react";
import { Slider, styled, Typography, Card } from "@mui/material";
import { Box } from "@mui/system";

const RatingCard = styled(Card)(({ theme }) => ({
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

const RatingHeader = styled("div")(({ theme }) => ({
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
    label: 'Any',
  },
  {
    value: 1,
    label: "1★",
  },
  {
    value: 2,
    label: "2★",
  },
  {
    value: 3,
    label: "3★",
  },
  {
    value: 4,
    label: "4★",
  },
  {
    value: 5,
    label: "5★",
  },
];

function valuetext(value) {
  return `${value}★`;
}

function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
}

const Rating = () => {
  return (
    <RatingCard>
      <RatingHeader>
        <Typography variant="h6" margin="5px" padding="3px">
          Rating
        </Typography>
      </RatingHeader>
        <Box fontWeight={'bold'} marginTop={2}>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelFormat={valueLabelFormat}
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          min={0}
          max={5}
          sx={{ width: '80%' }}
        />
        </Box>

    </RatingCard>
  );
};

export default Rating;
