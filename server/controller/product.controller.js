

const Product = require('../model/product.model')


// --- CRUDs ---

// FIND ALL PRODUCTS


// --- FIND ALL ---
module.exports.findAllProduct = (req, res) => {
    Product.find()
        .then(allProduct => res.json({ allProducts: allProduct }))
        .catch(err => res.json({ message: 'There was an error', serverError: err }))
};

// --- CREATE PRODUCT ---
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({ newProduct: newProduct }))
        .catch(err => res.json({ message: 'There was an error creating the product', serverError: err }))
}

// --- FIND ONE ---
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json({ message: 'There was an error finding the product', serverError: err }))
}

// --- find one AND UPDATE ---
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateProduct => res.json(updateProduct))
        .then(err => res.json({ message: 'There was an error updating the product', serverError: err }))

}

// --- DELETE PRODUCT ---
module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.json({ message: 'There was an error deleting the product', serverError: err }))
}