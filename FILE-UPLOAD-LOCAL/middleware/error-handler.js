const {StatusCodes} = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again later!'
    };
    if (err.name === 'ValidationError') {
        customError.statusCode = StatusCodes.BAD_REQUEST;
        customError.msg = `Missing ${Object.keys(err.errors)}`;
    }
    return res.status(customError.statusCode).json({msg: customError.msg});
    // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});
}

module.exports = errorHandler;