const express=require('express');
const router=express.Router();

const productController=require('../controler/productController')

router.get('/',productController.getAllProducts)

router.post('/',productController.addAllProducts)

router.get('/:id',productController.getProductswithId)  

module.exports=router;