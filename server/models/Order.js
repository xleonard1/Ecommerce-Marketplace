const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
},
products: [
    {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
],
bill: {
    type: Number,
    // required: true
},
date_added: {
    type: Date,
    default: Date.now
}
});

const Order = model('Order', orderSchema);

module.exports = Order;
