const {User, Product, Category, Order } = require('../models');
const Cart = require('../models/Cart');

const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');






const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },

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

     
     checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addProduct: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Product({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { products: product } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    updateCart: async (parent, args, context) => {
      const cart = new Cart({ args });

      await Cart.findByIdAndUpdate(context.user._id, args, {new: true})

    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
    
  },
};

module.exports = resolvers;
