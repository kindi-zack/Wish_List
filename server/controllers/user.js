const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static login(req, res) {
        const { email, password } = req.body

        User.findOne({
            where: {
                email
            }
        })
        .then(user => {
            if (!user) throw { msg: 'invalid email/password' }
            const checkPass = comparePassword(password, user.password)
            if (!checkPass) throw { msg: 'invalid email/password' } 
            const access_token = generateToken({
                id: user.id,
                email: user.email
            })
            res.status(200).json({
                access_token,
                user
            })
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

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