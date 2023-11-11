import Express from 'express';

// instanciation du router d'express
const routes = Express.Router();
import {getProductById, addProduct, updateProduct, deleteProduct, getAllProducts }from '../controllers/ProductPanierController.js';

routes.get('/allproducts', getAllProducts)
routes.get('/:idProduct', getProductById)
routes.post('/newProduct', addProduct)
routes.patch('/updateProduct/:idProduct', updateProduct)
routes.delete('/deleteProduct/:idProduct', deleteProduct)

export default routes;