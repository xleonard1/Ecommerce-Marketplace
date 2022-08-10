import React from "react";
import {
  Box,
  Typography,
  Link,
  Button,

} from "@mui/material";
import {  Delete } from "@mui/icons-material";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const CartItem = ({ product }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: product._id,
    });
    idbPromise("cart", "delete", { ...product });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: product._id,
      });
      idbPromise("cart", "delete", { ...product });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: product._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", {
        ...product,
        purchaseQuantity: parseInt(value),
      });
    }
  };

  return (
    <>
      <Box
        component="img"
        sx={{
          height: 80,
          width: 80,
          justifyContent: "start",
        }}
        alt={product.description}
        src={
          product.imageUrl.length
            ? product.imageUrl
            : "https://placehold.jp/80x80.png)"
        }
      />
      <Link href={"/product/:_id"} underline="none" ml={1}>
        {product.name}
      </Link>
      <Button onClick={() => removeFromCart(product)}>
        <Delete sx={{ justifyContent: "space-between" }} />
      </Button>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography>Price</Typography>
        <Typography>${product.price}</Typography>
      </Box>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography>Quantity</Typography>
        <input
          type="number"
          placeholder="1"
          value={product.quantity}
          onChange={onChange}
        />
      </Box>
    </>
  );
};

export default CartItem;
