const Mongoose = require('mongoose');
const {Schema} = Mongoose;

const ProductSchema = new Schema({
    
    name: {
      type: String,
      trim: true
    },
    imageUrl: {
      type: String
    },    
    description: {
      type: String,
      trim: true
    },    
    price: {
      type: Number
    },
        
  });
  
  module.exports = Mongoose.model('Product', ProductSchema);