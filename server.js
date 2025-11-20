const express = require('express');
const app = express();

const studentRouter = require('./router/students');
const courseRouter=require('./router/course');

app.use(express.json());

// Mount router
app.use('/students', studentRouter);

app.use('/course',courseRouter);

app.listen(4000, () => {
    console.log('server is running');
});
