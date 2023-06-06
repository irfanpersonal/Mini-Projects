const express = require('express');
const authRouter = require('./routes/auth.js');
const fruitRouter = require('./routes/Fruit.js');
const notFound = require('./middleware/not-found.js');
const app = express();

app.use('/login', authRouter);
app.use('/api/v1/fruit', fruitRouter);

app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(notFound);

app.listen(3000, () => {
    console.log('Server listening on port 3000...');
});