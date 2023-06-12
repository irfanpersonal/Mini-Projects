require('dotenv').config();
const connectDB = require('./database/connect.js');
const foodDataArray = require('./foodDataArray.js');
const Food = require('./models/food.js');

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Food.deleteMany({});
        await Food.create(foodDataArray);
        process.exit(0);
    }
    catch(error) {
        console.log(error);
        process.exit(1);
    }
}
start();