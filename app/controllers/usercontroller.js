//const users = require('../models/user.json');
const user = (req, res) => {
    const user = {
        "nombre": "Victor",
        "edad": 44,
        "url": "http://localhost:3000/user"
    }
    
    res.json(user)
}


module.exports = user
