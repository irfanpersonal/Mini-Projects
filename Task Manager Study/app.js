const express = require('express');
const connectDB = require('./database/connect.js');
const taskRouter = require('./routes/Task.js');
const notFound = require('./middleware/not-found.js');
const errorHandler = require('./middleware/error-handler.js');
require('dotenv').config();
const app = express();

app.use(express.json());

app.use('/api/v1/task', taskRouter);

app.use(express.static('./public'));

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