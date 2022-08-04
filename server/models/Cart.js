const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  userID: {
    type: String,
},
products: [
    {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
],
bill: {
    type: Number,
    required: true,
    default: 0
}
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;
