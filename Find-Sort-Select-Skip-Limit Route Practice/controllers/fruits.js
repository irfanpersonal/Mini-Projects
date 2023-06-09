const Fruit = require('../models/fruit.js');

const getAllFruitStatic = async(req, res) => {
    return res.status(200).json({msg: 'Get All Fruit Static'});
}

const getAllFruit = async(req, res) => {
    const {name, price, color, sort, fields} = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = {$regex: name, $options: 'i'};
    }
    if (price) {
        queryObject.price = price;
    }
    if (color) {
        queryObject.color = {$regex: color, $options: 'i'};
    }
    let result = Fruit.find(queryObject);
    if (sort) {
        const fixedSortInput = sort.split(',').join(' ');
        result = result.sort(fixedSortInput);
    }
    if (fields) {
        const fixedFieldInput = fields.split(',').join(' ');
        result = result.select(fixedFieldInput);
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    const fruits = await result;
    return res.status(500).json({nbHits: fruits.length, fruits});
}

module.exports = {
    getAllFruitStatic,
    getAllFruit
};