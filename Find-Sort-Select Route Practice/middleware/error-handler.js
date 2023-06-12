const errorHandler = (err, req, res, next) => {
    return res.status(500).json({status: true, code: 0, msg: 'Something went wrong, try again later!', data: []});
}

module.exports = errorHandler;