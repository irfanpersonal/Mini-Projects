const {StatusCodes} = require('http-status-codes');
const path = require('node:path');
const CustomError = require('../errors');

const uploadGameImage = async(req, res) => {
    if (!req.files) {
        throw new CustomError.BadRequestError('No File Provided');
    }
    const gameImage = req.files.image;
    if (!req.files.image.mimetype.startsWith('image')) {
        throw new CustomError.BadRequestError('Invalid File Format (image)');
    }
    const maxSize = 1024 * 1024;
    if (req.files.image.size > maxSize) {
        throw new CustomError.BadRequestError('File Size Too Large (1MB)');
    }
    const imagePath = path.join(__dirname, '../public/uploads', gameImage.name);
    await gameImage.mv(imagePath);
    return res.status(StatusCodes.OK).json({imageSource: `/uploads/${gameImage.name}`});
}

module.exports = {
    uploadGameImage
};