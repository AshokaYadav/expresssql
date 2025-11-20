const express=require('express');
const router=express.Router();

router.get('/:userId',(req,res)=>{
    res.send(`fetching cart for user is${req.params.userId}`);
})

router.post('/:userId',(req,res)=>{
    res.send(`adding new users ${req.params.userId}`);
})


module.exports=router;