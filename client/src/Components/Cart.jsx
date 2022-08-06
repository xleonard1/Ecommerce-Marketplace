import {
    AppBar,
    Box,
    Button,
    Drawer,
    List,
    Toolbar,
    styled,
    Typography,
    InputBase,
    Badge,
    IconButton,
  } from "@mui/material";
  import {
    ShoppingCart,
    Menu,
    LocalShipping,
    CreditCard,
    LocalPhone,
  } from "@mui/icons-material";
  import React, { useState } from "react";

  //state for menu drawer
  const [state, setState] = useState({
    left: false,
  });

  //toggle function on menu button
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