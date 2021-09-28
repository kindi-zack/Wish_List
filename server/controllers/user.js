const { User } = require('../models')

class UserController {
    static register(req, res) {
        const { email, password } = req.body
        const saldo = 5000000
        User.create({
            email, password, saldo
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}

module.exports = UserController