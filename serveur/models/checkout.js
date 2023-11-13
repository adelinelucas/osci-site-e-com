const mongoose = require('mongoose');


// Define a schema for the items in the checkout
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Define the Checkout schema
const checkoutSchema = new mongoose.Schema({
  items: [itemSchema], // An array of items in the checkout
  totalPrice: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // If linked to a user schema
    ref: 'User' // Replace 'User' with the actual name of your user schema
  },
  transactionId: {
    type: String // Could be an identifier for a payment transaction
  },
  // Additional fields like payment status, timestamps, etc. could be added here
}, { timestamps: true });


const CheckoutModel = mongoose.model('Checkout', checkoutSchema);
export default  CheckoutModel;
