const jwt = require('jsonwebtoken')
const { Wishlist } = require('../models')

function authenticate(req, res, next) {
    try {
        const access_token = req.headers.access_token
        const decoded = jwt.verify(access_token, process.env.SECRET)
        req.decoded = decoded
        next() 
    }catch(err){
        err.msg = 'invalid token'
        next(err)
    }
}

function authorize(req, res, next) {
    const { id } = req.params
    const IdUser = req.decoded.id

    Wishlist.findByPk(id)
    .then(data=> {
        if(IdUser !== data.IdUser) throw {name: 'auth', msg: 'unauthorize'}
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