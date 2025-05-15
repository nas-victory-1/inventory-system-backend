import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
        enum: ["Electronics", "Clothing", "Groceries", "Books"]
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

export default Product;