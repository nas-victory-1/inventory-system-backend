import { body } from 'express-validator';

export const productsValidation = [
    body('name')
    .isString().withMessage("Name of product should be a string")
    .notEmpty().withMessage("Name is required"),
    
    body('category')
    .isString().withMessage("category of product should be a string")
    .notEmpty().withMessage("Category is required")
    .isIn(['electronics', 'clothing', 'groceries', 'books']).withMessage('Type should be 1 of the 4'),

    body('price')
    .isNumeric().withMessage("Price should be a price OBVIOUSLY")
    .notEmpty().withMessage("It's required"),

    body('stock')
    .isNumeric().withMessage("stock should be a number OBVIOUSLY")
    .notEmpty().withMessage("It's required")
]