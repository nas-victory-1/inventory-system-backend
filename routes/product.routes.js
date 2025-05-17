import express from 'express';
import { productsValidation } from '../validators/products.validators.js';
import { validate } from '../validators/validate.js';
import { addProduct, getProduct } from '../controllers/product.controllers.js';

const router = express.Router();

router.post('/add-product', productsValidation, validate, addProduct);
router.get('/all-products', getProduct);

export default router;