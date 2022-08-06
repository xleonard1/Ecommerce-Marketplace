import {
  Box,
  Button,
  Drawer,
  List,
  styled,
  Typography,
  Badge,
  IconButton,
} from "@mui/material";
import {
  ShoppingCart,
} from "@mui/icons-material";
import React, { useState } from "react";



const Cart = () => {
  //state for cart drawer
  const [state, setState] = useState({
    right: false,
  });

  //toggle function on cart button
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //list on the menu drawer
const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Shop By Category</Typography>
        <Button>Shoes</Button>
        <Button>Bags</Button>
        <Button>Clothes</Button>
        <Button>Electronics</Button>
      </List>
    </Box>
  );

  return (
    <React.Fragment key={"right"}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2, color: 'black' }}
        onClick={toggleDrawer("right", true)}
      >
        <Badge badgeContent={1}>
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
};

export default Cart;
