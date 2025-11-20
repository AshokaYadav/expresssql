const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('fetching all producst');
})

router.post('/',(req,res)=>{
    res.send('adding new producst');
})

router.get('/:id',(req,res)=>{
    res.send('fetcgin producst with id');
})  

module.exports=router