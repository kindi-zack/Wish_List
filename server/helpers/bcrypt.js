const bcrypt = require('bcryptjs')

function hashPass(pswd) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(pswd, salt)
}

function comparePass(pass, hashedPass) {
    return bcrypt.compareSync(pass, hashedPass)
}

module.exports = {
    hashPass, comparePass
}