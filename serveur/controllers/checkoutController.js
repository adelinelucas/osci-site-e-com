import CheckoutModel from '../models/Checkout';
import ProductModel from '../models/Products';

/**
 * The function `getCartContents` retrieves the contents of a user's cart by
 * finding the cart in the database, populating the items, and then finding the
 * corresponding products.
 * @param req - The `req` parameter is the request object that contains information
 * about the HTTP request made by the client. It includes properties such as the
 * request method, request headers, request body, request parameters, etc.
 * @param res - The `res` parameter is the response object that is used to send the
 * response back to the client. It contains methods and properties that allow you
 * to control the response, such as setting the status code, headers, and sending
 * the response body.
 * @returns a JSON response with the cart contents. If the cart is not found for
 * the user, it returns a 404 status code with a message indicating that the cart
 * was not found. If there are no products in the cart, it returns a 404 status
 * code with a message indicating that no products were found in the cart. If there
 * is an error retrieving the cart contents, it
 */
export const getCartContents = async (req, res) => {
  const userId = req.params.userId; //

  try {
    const cartContents = await CheckoutModel.findOne({ user: userId }).populate('items');

    if (!cartContents) {
      return res.status(404).json({ message: "Cart not found for this user" });
    }

    const productIds = cartContents.items.map(item => item.productId);
    const productsInCart = await ProductModel.find({ _id: { $in: productIds } });

    if (!productsInCart) {
      return res.status(404).json({ message: "No products found in the cart" });
    }

    res.status(200).json({ cartContents: productsInCart });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cart contents", error: error.message });
  }
};
