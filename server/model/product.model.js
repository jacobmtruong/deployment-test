

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Minimum length is 3 characters"]
    },
    price: { 
        type: Number, 
        required: [true, "Price is required"], 
        minlength: [1, "Price length is 1 character"] 
    },
    description: { 
        type: String, 
        required: [true, "Description is required"], 
        minlength: [5, "Description length is 5 characters"]
    }    
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;