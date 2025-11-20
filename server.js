const express = require('express');
const app = express();

// Import routers
const userRouter = require('./routes/userRouter');
const listRouter = require('./routes/listRouter');

// Use routers
app.use('/user', userRouter);
app.use('/list', listRouter);

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
