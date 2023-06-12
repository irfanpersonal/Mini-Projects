require('dotenv').config();
require('express-async-errors');
const connectDB = require('./database/connect.js');
const notFound = require('./middleware/not-found.js');
const errorHandler = require('./middleware/error-handler.js');
const foodRouter = require('./routes/food.js');
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/foods', foodRouter);

app.get('/', (req, res) => {
    return res.status(200).send(`
        <h1>Store API</h1>
        <a href="/api/v1/foods">Food Route</a><br>
        <a href="/api/v1/foods/static">Food Route Static</a>
    `);
});

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        });
    }
    catch(error) {
        console.log(error);
    }
}
start();