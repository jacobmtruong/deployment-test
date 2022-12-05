
const ProductController = require('../controller/product.controller')


module.exports = (app) => {
    app.get('/api/products', ProductController.findAllProduct);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.post ('/api/products', ProductController.createProduct);
    app.put ('/api/products/:id', ProductController.updateProduct);
    app.delete ('/api/products/:id', ProductController.deleteProduct);
}