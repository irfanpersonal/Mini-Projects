const notFound = (req, res) => {
    return res.status(404).send('<h1>Resource Not Found</h1>');
}

module.exports = notFound;