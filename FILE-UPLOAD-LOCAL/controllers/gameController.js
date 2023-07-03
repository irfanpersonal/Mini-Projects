const {StatusCodes} = require('http-status-codes');
const Game = require('../models/Game.js');

const getAllGames = async(req, res) => {
    const games = await Game.find({});
    return res.status(StatusCodes.OK).json({games});
}

const createGame = async(req, res) => {
    const game = await Game.create(req.body);
    return res.status(StatusCodes.CREATED).json({game});
}

module.exports = {
    getAllGames,
    createGame
};