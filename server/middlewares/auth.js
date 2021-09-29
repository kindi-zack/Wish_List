const jwt = require('jsonwebtoken')

function authenticate (req, res, next) {
    try {
        const decoded = jwt.verify(req.headers.access_token, process.env.RAHASIA)
        req.decoded = decoded
        next()
    } catch(err) {
        next(err)
    }
}

module.exports = {
    authenticate
}