import Express from 'express';
import { createCheckout, getCheckoutsByUserId } from '../controllers/checkoutController';
import {getProductById, getAllProducts }from '../controllers/ProductPanierController.js';

const router = Express.router();

router.route('checkout/new').post(createCheckout);
router.route('/checkout').get(getCheckoutsByUserId);
routes.get('/allproducts', getAllProducts)
routes.get('/:idProduct', getProductById)

export default router;
