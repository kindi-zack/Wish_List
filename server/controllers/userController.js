const { User } = require('../models/')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

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
        })
    }

    static login(req, res, next) {
        const {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
        .then(user=> {
            if(!user) throw {name: 'login', msg: 'invalid email / password'}
            const checkPass = comparePassword(password, user.password)
            if(!checkPass) throw {name: 'login', msg: 'invalid email / password'}
            const access_token = generateToken({
                id: user.id,
                email: user.email
            })
            res.status(200).json({
                id: user.id,
                email: user.email,
                access_token
            })
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = UserController