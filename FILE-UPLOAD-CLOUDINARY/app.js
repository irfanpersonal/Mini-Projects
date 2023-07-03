require('dotenv').config();
require('express-async-errors');
const connectDB = require('./database/connect.js');
const gameRouter = require('./routes/gameRouter.js');
const notFoundMiddleware = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const express = require('express');
const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

app.use(express.json());

app.use(fileUpload({
    useTempFiles: true
}));

app.use(express.static('./public'));

app.use('/api/v1/games', gameRouter);

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

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