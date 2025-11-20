const express = require('express');
const app = express();

// IMPORTANT: Body ko read karne ke liye middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Here is the list of books');
});

app.post('/', (req, res) => {
    console.log(req.body); // <-- req.body (not res.body)
    res.send('Books submitted successfully');
});

app.listen(4000, () => {
    console.log('server is running');
});
