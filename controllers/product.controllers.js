import Product from "../model/product.model.js";

export const addProduct = async(req, res) =>{
    const {name, category, price, stock} = req.body;
    
    try {
        // if(!name | !category | !price | !stock){
        //     res.status(400).json({
        //         success: false,
        //         message: "Please provide all fields"
        //     })
        // }
        const existingProduct = await Product.findOne({name})//Why are we destructuring here?
        if(existingProduct){
            res.status(401).json({
                success: false,
                message: "Product already exists"
            })
        }

        const newProduct = new Product({
            name,
            category,
            price,
            stock
        })

        await newProduct.save();

        return res.status(201).json({
            success: true,
            message: "Added new product successfully",
            data: newProduct
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error in adding product"
        })
    }
}

export const getProduct = async(req, res) =>{
    try {
        const allProducts = await Product.find();
        if(!allProducts || allProducts.length === 0){
            return res.status(404).json({
                success:false,
                message: "There are no products."
            })
        }

        return res.status(200).json({
            success:true,
            message:"Products listed successfully",
            data: allProducts
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error in displaying all products"
        })
    }
}

export const getSingleProduct = async(req, res) =>{
        
}

//three mainporperties in the request object: body, params and query