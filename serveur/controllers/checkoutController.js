const Checkout = require('./models/checkout'); // Import the Checkout model

// Fonction pour créer un nouveau checkout
async function createCheckout(items, totalPrice, userId, transactionId) {
  try {
    const newCheckout = new Checkout({
      items: items,
      totalPrice: totalPrice,
      user: userId,
      transactionId: transactionId
    });

    const savedCheckout = await newCheckout.save();
    return savedCheckout;
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
}

// fonction pour retouver le checkout (userId)
async function getCheckoutsByUserId(userId) {
  try {
    const checkouts = await Checkout.find({ user: userId });
    return checkouts;
  } catch (error) {
    console.error('Error retrieving checkouts by user ID:', error);
    throw error;
  }
}


module.exports = {
  createCheckout,
  getCheckoutsByUserId,
  updateCheckoutById
};
