import Express from 'express';

// instanciation du router d'express
const router = Express.Router();

import { createProduct, getProducts } from '../controllers/ProductCatalogueController.js';
import upload from "../middlewares/multer.js";

router.route('/products/new').post(createProduct)
router.route('/products').get(getProducts)


export default router; 

