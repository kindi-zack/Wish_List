const jwt = require('jsonwebtoken')

function generateToken (payload) {
    return jwt.sign(payload, process.env.HIMETSU)
}

module.exports = {
    generateToken
}