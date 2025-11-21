const ProuductServices=require('../services/productService')

exports.getAllProducts =(req,res)=>{
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    res.send(ProuductServices.getAllProductsService());
}

exports.addAllProducts=(req,res)=>{
    res.send(ProuductServices.getProductsWithId());
}

exports.getProductswithId=(req,res)=>{
    res.send(ProuductServices.addProductServices());
}