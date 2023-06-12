require('dotenv').config();
const Fruit = require('./models/fruit.js');
const connectDB = require('./database/connect.js');
const fruitArrayData = require('./fruitArrayData.js');

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Fruit.deleteMany({});
        await Fruit.create(fruitArrayData);
        process.exit(0);
    }
    catch(error) {
        console.log(error);
        process.exit(1);
    }
}
start();