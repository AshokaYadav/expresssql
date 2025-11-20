const express = require('express');
const app = express();

const usersRouter = require('./router/user');
const productsRouter=require('./router/product');

const cartRouter=require('./router/cart');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('welcome')
})

// Mount router
app.use('/users', usersRouter);

app.use('/products',productsRouter);

app.use('/cart',cartRouter)

app.listen(4000, () => {
    console.log('server is running');
});
