const {fruits} = require('../foods.js');

const getAllFruit = (req, res) => {
    return res.status(200).json({status: true, code: 1, msg: 'Success', data: fruits});
}

const getSingleFruit = (req, res) => {
    const {fruitID} = req.params;
    if (fruitID >= 1 && fruitID <= 4) {
        return res.status(200).json({status: true, code: 1, msg: `Successfully got Fruit with ID ${fruitID}`, data: fruits[fruitID - 1]});
    }
    return res.status(404).json({status: true, code: 0, msg: 'Invalid Fruit ID', data: []});
}

const addFruit = (req, res) => {
    const data = req.body;
    if (data) {
        const newFruits = [...fruits];
        newFruits.push(data);
        return res.status(200).json({status: true, code: 1, msg: 'Successfully added Fruit', data: newFruits});
    }
    return res.status(400).json({status: true, code: 0, msg: 'Missing Req Body', data: []});
}

const updateSingleFruit = (req, res) => {
    const {fruitID} = req.params;
    const {name} = req.body;
    if ((fruitID >= 1 && fruitID <= 4) && name) {
        const newFruits = [...fruits];
        newFruits[fruitID - 1].name = name;
        return res.status(200).json({status: true, code: 1, msg: 'Done', data: newFruits});
    } 
    return res.status(400).json({status: true, code: 0, msg: 'Please Enter Req Body with Name', data: []});
}

const deleteSingleFruit = (req, res) => {
    const {fruitID} = req.params;
    if (fruitID >= 1 && fruitID <= 4) {
        const newFruits = [...fruits];
        newFruits.splice((fruitID - 1), 1);
        return res.status(200).json({status: true, code: 1, msg: `Deleted Fruit with Fruit ID ${fruitID}`, data: newFruits});
    }
    return res.status(400).json({status: true, code: 0, msg: 'Invalid Fruit ID', data: []});
}

module.exports = {
    getAllFruit,
    getSingleFruit,
    addFruit,
    updateSingleFruit,
    deleteSingleFruit
};