const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  userId: {
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
        min: [1, 'Quantity can not be less then 1.'],
        default: 1
    },
    price: Number
}],
bill: {
    type: Number,
    required: true,
    default: 0
}
});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;
