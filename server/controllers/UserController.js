const { User } = require('../models')
const { comparePswd } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        const { email, password } = req.body
        const saldo = 5000000

        User.create({
            email, password, saldo
        })
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        const { email, password } = req.body

        User.findOne({
            where: {
                email
            }
        })
        .then(user => {
            if (!user) throw {name: 'login', msg: 'invalid password / email'}
            const checkPswd = comparePswd(password, user.password)
            if (!checkPswd) throw {name: 'login', msg: 'invalid password / email'}
            const access_token = generateToken({
                id: user.id,
                email: user.email
            })

            res.status(200).json({
                id: user.id,
                email: user.email,
                access_token,
                saldo: user.saldo
            })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = {
    UserController
}