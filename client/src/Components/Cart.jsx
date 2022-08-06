import {
  Box,
  Drawer,
  Container,
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
      sx={{ width: 400, ml: 2, mr: 2, mt: 2 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Typography variant="h6" >Shopping Cart</Typography>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center'}}>
            <Box
            component="img"
            sx={{
            height: 80,
            width: 80,
            justifyContent:'start'
            }}
            alt="placeholder"
            src='https://placehold.jp/80x80.png'
            />
            <Link href="#" underline="none" ml={1}>Product Info</Link>
            <Button>
                <Delete sx={{justifyContent: 'space-between'}}/>
            </Button>
        </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Price</Typography>
                <Typography>$29</Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Quantity</Typography>
                <Typography>1</Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignContent: 'baseline'}}>
                <Typography>Free Shipping</Typography>
                <Typography>$0</Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignContent: 'baseline'}}>
                <Typography>Total</Typography>
                <Typography>$29</Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Button variant="outlined">Continue Shopping</Button>
                <Button variant="outlined">Proceed To Checkout</Button>
            </Box>
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
