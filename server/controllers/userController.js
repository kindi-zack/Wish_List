const { User } = require('../models/')

class UserController{
    static register(req, res, next) {
        const { email, password } = req.body
        const saldo = 5000000;
        User.create({
            email, password, saldo
        })
        .then(user=> {
            res.status(201).json(user)
        })
        .catch(err=>{
            next(err)
            // res.status(400).json(err)
        })
    }
}

module.exports = UserController