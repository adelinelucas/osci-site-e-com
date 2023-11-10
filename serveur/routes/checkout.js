import Express from 'express';
import { createCheckout, getCheckoutsByUserId } from '../controllers/checkoutController';
import { upload } from "multer.js";

const router = Express.router();

router.route('checkout/new').post(createCheckout);
router.route('/checkout').get(getCheckoutsByUserId);

export default router;
