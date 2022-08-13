const Mongoose = require('mongoose');
const {Schema} = Mongoose;

const ProductSchema = new Schema({
    
    name: {
      type: String,
      trim: true
    },
    image: {
      type: String
    },    
    description: {
      type: String,
      trim: true
    },    
    price: {
      type: Number
    },
    quantity: {
      type: Number,
      min: 0,
      default: 0
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
        
  });
  
  module.exports = Mongoose.model('Product', ProductSchema);