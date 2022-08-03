const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  username: {
    type: String,
},
items: [{
    productId: {
        type: String,
    },
    name: String,
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    price: Number
}],
bill: {
    type: Number,
    required: true
},
date_added: {
    type: Date,
    default: Date.now
}
});

const Order = model('Order', orderSchema);

module.exports = Order;
