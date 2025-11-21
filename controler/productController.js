const ProuductServices=require('../services/productService')

exports.getAllProducts =(req,res)=>{
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    const filePath = ProuductServices.getAllProductsService();
    res.sendFile(filePath);
}

exports.addAllProducts=(req,res)=>{
    res.send(ProuductServices.getProductsWithId());
}

exports.getProductswithId=(req,res)=>{
    res.send(ProuductServices.addProductServices());
}