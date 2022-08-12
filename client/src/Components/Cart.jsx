import {
  Box,
  Drawer,
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
import CartItem from "./CartItem";
import { useStoreContext } from "../utils/GlobalState"
import React, { useState, useEffect } from "react";

// import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../utils/queries';
// import { idbPromise } from '../utils/helpers';
// import CatItem from './CartItem';
// import Auth from '../utils/auth';
// import { useStoreContext } from '../utils/GlobalState';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions';

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  
  const [state, dispatch] = useStoreContext();
  
  const [drawerState, setDrawerState] = useState({
    right: false,
  });

  // const [state, dispatch] = useStoreContext();
  // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // useEffect(() => {
  //   if (data) {
  //     stripePromise.then((res) => {
  //       res.redirectToCheckout({ sessionId: data.checkout.session });
  //     });
  //   }
  // }, [data]);

  // useEffect(() => {
  //   async function getCart() {
  //     const cart = await idbPromise('cart', 'get');
  //     dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
  //   }

  //   if (!state.cart.length) {
  //     getCart();
  //   }
  // }, [state.cart.length, dispatch]);

  // function toggleCart() {
  //   dispatch({ type: TOGGLE_CART });
  // }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
     }

  // function submitCheckout() {
  //   const productIds = [];

  //   state.cart.forEach((item) => {
  //     for (let i = 0; i < item.purchaseQuantity; i++) {
  //       productIds.push(item._id);
  //     }
  //   });

  //   getCheckout({
  //     variables: { products: productIds },
  //   });
  // }

  // if (!state.cartOpen) {
  //   return (
  //     <div className="cart-closed" onClick={toggleCart}>
  //       <span role="img" aria-label="trash">
  //         🛒
  //       </span>
  //     </div>
  //   );
  // }
  

  //toggle function on cart button
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  //list on the menu drawer
const list = (anchor) => (
  <>
  {state.cart.length ? (
    <Box
      sx={{ width: 400, ml: 2, mr: 2, mt: 2 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {state.cart.map((item, index) => {
        return <CartItem product={item} key={index} />
      })}
       
       
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignContent: 'baseline'}}>
                <Typography>Free Shipping</Typography>
                <Typography>$0</Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignContent: 'baseline'}}>
                <Typography>Total</Typography>
                <Typography>${calculateTotal()}</Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Button variant="outlined">Continue Shopping</Button>
                <Button variant="outlined">Proceed To Checkout</Button>
            </Box> 
    </Box>
    ) : (
      <Box
      sx={{ width: 400, ml: 2, mr: 2, mt: 2 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
      </h3>
    </Box>
    )}
    </>
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
        <Badge badgeContent={state.cart.length}>
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Drawer
        anchor={"right"}
        open={drawerState["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
};

export default Cart;
