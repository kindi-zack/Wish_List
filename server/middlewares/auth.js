const jwt = require('jsonwebtoken')
const { User, Wishlist } = require('../models')

function authenticate (req, res, next) {
    try {
        const access_token = req.headers.access_token
        const decoded = jwt.verify(access_token, process.env.HIMETSU)
        req.decoded = decoded
        next()
    }catch (err) {
        err.msg = 'invalid token'
        next(err)
    }
}

function authorization (req, res, next) {
    const UserId = req.decoded.id
    const wishlistId = req.params.id
    
    Wishlist.findByPk (wishlistId)
    .then(data => {
        if (UserId !== data.UserId) throw { msg: 'not Authorize' }
        next()
    })
    .catch(err => {
        next(err)
    })

}

module.exports = {
    authenticate,
    authorization
}