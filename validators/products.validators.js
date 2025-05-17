import { body } from 'express-validator';

export const productsValidation = [
    body('name')
    .notEmpty().withMessage("Name is required")
    .isString().withMessage("Name of product should be a string"),
    
    body('category')
    .notEmpty().withMessage("Category is required")
    .isString().withMessage("category of product should be a string")
    .isIn(['Electronics', 'Clothing', 'Groceries', 'Books'])
    .withMessage('Type should be either Electronics, Clothing, Groceries or Books'),

    body('price')
    .notEmpty().withMessage("Price is required")
    .isNumeric().withMessage("Price should be a price (number format)"),

    body('stock')
    .notEmpty().withMessage("It's required")
    .isNumeric().withMessage("Stock should be a number")
]