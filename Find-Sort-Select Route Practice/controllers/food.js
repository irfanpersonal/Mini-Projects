const Food = require('../models/food.js');

const getAllFood = async(req, res) => {
    const {name, price, color, sort, fields} = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = {$regex: name, $options: 'i'};
    }
    if (price) {
        queryObject.price = price;
    }
    if (color) {
        queryObject.color = color;
    }
    let result = Food.find(queryObject);
    if (sort) {
        const fixedSortInput = sort.split(',').join(' ');
        result = result.sort(fixedSortInput);
    }
    if (fields) {
        const fixedFieldsInput = fields.split(',').join(' ');
        result = result.select(fixedFieldsInput);
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    const products = await result;
    return res.status(200).json({nbHits: products.length, products});
}

const getAllFoodStatic = async(req, res) => {
    return res.status(200).json({msg: 'Food Route Static'});
}

module.exports = {
    getAllFood,
    getAllFoodStatic
};