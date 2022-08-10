import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const CartItem = ({ product }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: product._id
    });
    idbPromise('cart', 'delete', { ...product });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: product._id
      });
      idbPromise('cart', 'delete', { ...product });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: product._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...product, purchaseQuantity: parseInt(value) });
    }
  }

  return (
    <Box
            component="img"
            sx={{
            height: 80,
            width: 80,
            justifyContent:'start'
            }}
            alt="placeholder"
            src={product.imageUrl.length ? ( product.imageUrl) : ('https://placehold.jp/80x80.png)')}
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

    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;