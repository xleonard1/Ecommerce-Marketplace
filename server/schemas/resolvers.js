const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    products: async () => {
      return Product.find({});
    },
    product: async (parent, {name }) => {
      return await Product.find(username).populate('products');
     },
    cart: async (parent, {username }) => {
      return await Cart.find(username).populate('cart');
     
     },
     orders: async (parent, {username }) => {
      return await Order.find(username).populate('orders');
     },
     
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
