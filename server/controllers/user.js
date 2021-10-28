const { User } = require('../models')
const { Op } = require('sequelize')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static login(req, res, next) {
        const { email, password } = req.body

        User.findOne({
            where: {
                [Op.or]: [
                    { email },
                    { username: email }
                ]
            }
        })
        .then(data => {
            if(!data) throw { name: 'login', msg: 'invalid password / email' }
            const checkPswd = comparePass(password, data.password)
            if(!checkPswd)  throw { name: 'login', msg: 'invalid password / email' }
            const access_token = generateToken({
                id: data.id,
                username: data.username
            })

            res.status(200).json({ 
                id: data.id,
                username: data.username,
                email: data.email,
                access_token
             })
        })
        .catch(err => {
            next(err)
        })
    }

    static register(req, res, next) {
        const { username, email, password, saldo = 5000000  } = req.body

        User.create({
            username, saldo, email, password
        })
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = {
    UserController
}