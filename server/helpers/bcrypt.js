const bcrypt = require('bcryptjs')

function hashPassword(pswd) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(pswd, salt)
}

function comparePassword(pswd, hashPass) {
    return bcrypt.compareSync(pswd, hashPass)
}

module.exports = {
    hashPassword,
    comparePassword
}