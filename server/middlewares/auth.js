const jwt = require('jsonwebtoken')
const { User, Wishlist } = require('../models')

function authenticate(req, res, next) {
    try{
        const {access_token} = req.headers
        const decoded = jwt.verify(access_token, process.env.RAHASIA)
        req.decoded = decoded
        next()
    }catch(err) {
        err.name = 'auth'
        next(err)
    }
}

function authorize(req, res, next) {
    UserId = req.decoded.id
    id = req.params.id

    Wishlist.findOne({
        where: {
            id
        }
    })
    .then(data => {
        if(data.UserId !== UserId) throw {name: 'auth', msg: 'unauthorized'}
        next()
    })
    .catch(err => {
        next(err)
    })
}

module.exports = {
   authenticate,
   authorize
}