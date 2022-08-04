const { Tech, Matchup, User } = require('../models');
const {User, Product, Category, Order } = require('../models')

const resolvers = {
  Query: {
    products: async () => {
      return Product.find({});
    },
    product: async (parent, {name }) => {
      return await Product.find(username).populate('products');
     },
    cart: async (parent, {username }) => {
      return await Cart.findOne({username}).populate('cart');
     
     },
     orders: async (parent, {username }) => {
      return await Order.find(username).populate('orders');
     },
     user: async (parent, args, context) => {
       if (context.user) {
         const user = await User.findById(context.user._id).populate({
           path: 'orders.products',
           populate: 'category'
         });

         user.orders.sort((a,b) => b.purchaseDate - a.purchaseDate)
       }
     }
     
  },

  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
