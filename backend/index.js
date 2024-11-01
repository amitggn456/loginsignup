const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
// const ProductRouter = require('../Routes/ProductRouter');

require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 8085;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})