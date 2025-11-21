const express=require('express');
const router=express.Router();

const productController=require('../controler/productController')

router.get('/',productController.getAllProducts)

router.post('/',productController.addProductswithId)

router.get('/:id',productController.addProductswithId)  

module.exports=router;