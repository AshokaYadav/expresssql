const path = require('path');

exports.getAllProductsService = () => {
    // Service should return path, not res
    return path.join(__dirname, '..', 'Views', 'products.html');
};


exports.getProductsWithId=(id)=>{
    return `fetchign products with ${id}`;
};


exports.addProductServices=()=>{
    return `products added successfully`;
};