const ProuductServices=require('../services/productService')

exports.getAllProducts =(req,res)=>{
    
    const filePath = ProuductServices.getAllProductsService();
    res.sendFile(filePath);
}

exports.addAllProducts=(req,res)=>{
    res.send(ProuductServices.addProductServices());
}

exports.addProductswithId=(req,res)=>{
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    console.log(req.body);
    res.send(ProuductServices.addProductServices(req.body));
}