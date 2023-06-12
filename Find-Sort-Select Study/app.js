require('dotenv').config();
require('express-async-errors');
const notFound = require('./middleware/not-found.js');
const errorHandler = require('./middleware/error-handler.js');
const connectDB = require('./database/connect.js');
const fruitRouter = require('./routes/fruit.js');
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/fruits', fruitRouter);

app.get('/', (req, res) => {
    return res.status(200).send(`
        <h1>Fruit Store</h1>
        <a href="/api/v1/fruits">Fruit Route</a><br>
        <a href="/api/v1/fruits/static">Fruit Route Static</a>
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