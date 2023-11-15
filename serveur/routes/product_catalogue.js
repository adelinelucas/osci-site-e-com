import Express from 'express';

// instanciation du router d'express
const router = Express.Router();

import { createProduct, getProducts,getAllProductOrderByAscendingPrice,getAllProductOrderByDecreasingPrice,getProductById} from '../controllers/ProductCatalogueController.js';
import upload from "../middlewares/multer.js";

router.route('/products/new').post(upload.single('img'), createProduct)
router.route('/products').get(getProducts)
router.route('/products/asc').get(getAllProductOrderByAscendingPrice)
router.route('/products/desc').get(getAllProductOrderByDecreasingPrice)
router.route('/products/:id').get(getProductById)
export default router; 

