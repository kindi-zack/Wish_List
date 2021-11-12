const bcrypt = require('bcryptjs')

function hashPassword(pswd) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(pswd, salt)
}

function comparePassword(pswd, hashedPass) {
  return bcrypt.compareSync(pswd, hashedPass)
}

module.exports = {
  hashPassword,
  comparePassword
}