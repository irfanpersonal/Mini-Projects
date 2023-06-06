const {CustomAPIError} = require('../errors/custom-error.js');

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({status: true, code: 0, msg: err.message, data: []});
    }
    return res.status(500).json({status: true, code: 0, msg: 'Something went wrong, try again later!', data: []});
}

module.exports = errorHandler;