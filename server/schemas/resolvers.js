const {User, Product, Category, Order } = require('../models');
const Cart = require('../models/Cart');

const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51LTnsNB56uRiRR3o8Y4fSZbL55yqAlpZFOk5NA2TVewPDjEx1oABeW7bfXNiyI7dQIMWoeea5zB4sru4Ct1ZTFRn00meyj5tpY');






const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },

    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },

    product: async (parent, {name }) => {
      return await Product.find(name).populate('products');
     },

     cart: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'carts.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
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

    //  user: async (parent, args, context) => {
    //    if (context.user) {
    //      const user = await User.findById(context.user._id).populate({
    //        path: 'orders.products',
    //        populate: 'category'
    //      });

    //      user.orders.sort((a,b) => b.purchaseDate - a.purchaseDate)
    //    }
    //  }
    user: async () => {
      return await User.find();
    },
     

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

    updateProduct: async (parent, { args}) => {
            
      return await Product.findByIdAndUpdate( args, { new: true });
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
