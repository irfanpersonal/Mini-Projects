const login = (req, res) => {  
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`<h1>Welcome ${name}</h1>`);
    }
    return res.status(401).send('<h1>Please Provide Valid Credentials</h1>');
}

module.exports = {login};