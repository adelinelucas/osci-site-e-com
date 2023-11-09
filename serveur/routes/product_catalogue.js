import Express from 'express';
import { createProduct } from '../controllers/ProductCatalogueController.js';
// instanciation du router d'express
const router = Express.Router();

router.route('products/catalogue/new/').post(createProduct)
