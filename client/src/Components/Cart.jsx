import {
  Box,
  Drawer,
  List,
  Typography,
  Badge,
  IconButton,
  Link,
  Button
} from "@mui/material";
import {
  ShoppingCart,
  Delete
} from "@mui/icons-material";
import React, { useState } from "react";
import { borderRadius } from "@mui/system";



const Cart = (props) => {

    const { cartItems, handleRemoveFromCart } = props;

    const handleProductClick = () => {
        props.toggleCart();
      };

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
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ml: 2}}>Shopping Cart</Typography>
        <Box sx={{ mt: 2, ml: 2, display: 'flex', justifyContent:'start', alignItems: 'center'}}>
            <Box
            component="img"
            sx={{
            height: 80,
            width: 80,
            }}
            alt="placeholder"
            src='https://placehold.jp/80x80.png'
            />
            <Link href="#" underline="none" ml={1}>Product Info</Link>
            <Box>
                <Button>
                    <Delete />
                </Button>
            </Box>
        </Box>
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
