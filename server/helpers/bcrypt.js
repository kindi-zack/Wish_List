const bcrypt = require('bcryptjs')

function hashPswd (pswd) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(pswd, salt)
}

function comparePswd (pswd, hashed) {
    return bcrypt.compareSync(pswd, hashed)
}

module.exports = {
    hashPswd,
    comparePswd
}