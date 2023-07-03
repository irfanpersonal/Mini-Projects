const {StatusCodes} = require('http-status-codes');
const path = require('node:path');
const CustomError = require('../errors');
const cloudinary = require('cloudinary').v2;
const fs = require('node:fs');
const util = require('node:util');
const unlinkPromisified = util.promisify(fs.unlink);

// const uploadGameImage = async(req, res) => {
//     if (!req.files) {
//         throw new CustomError.BadRequestError('No File Provided');
//     }
//     const gameImage = req.files.image;
//     if (!req.files.image.mimetype.startsWith('image')) {
//         throw new CustomError.BadRequestError('Invalid File Format (image)');
//     }
//     const maxSize = 1024 * 1024;
//     if (req.files.image.size > maxSize) {
//         throw new CustomError.BadRequestError('File Size Too Large (1MB)');
//     }
//     const imagePath = path.join(__dirname, '../public/uploads', gameImage.name);
//     await gameImage.mv(imagePath);
//     return res.status(StatusCodes.OK).json({imageSource: `/uploads/${gameImage.name}`});
// }

// The reason why we chose to make our unlink async method
// a promise is because it makes it easier to throw our 
// custom error. 
// Remember hrowing an error inside a callback function 
// does not propagate the error to the surrounding code 
// or crash the application. Instead, it will simply 
// terminate the execution of the callback function.
const uploadGameImage = async(req, res) => {
    const gameImage = req.files.image;
    const result = await cloudinary.uploader.upload(gameImage.tempFilePath, {
        use_filename: true,
        folder: 'file-upload'       
    });
    unlinkPromisified(gameImage.tempFilePath).then(() => {
        return res.status(StatusCodes.OK).json({imageSource: result.secure_url});
    }).catch(error => {
        throw new CustomError.BadRequestError('Failed To Delete File After Image Upload');
    });
}

module.exports = {
    uploadGameImage
};