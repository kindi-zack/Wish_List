const { User } = require('../models')
const genToken = require('../helper/jwt')
const { comparePassword } = require('../helper/bcrypt')

class Controller {
  static login(req, res, next) {
    const { email, username, password } = req.body

    User.findOne({
      where: {
        username
      }
    })
    .then(user => {
      if (!user) throw { msg: "invalid email / password"}
      const checkPass = comparePassword(password, user.password)
      if (!checkPass) throw { msg: "invalid email / password" }
      const access_token = genToken({
        id: user.id,
        username: user.username
      })
      
      res.status(200).json({
        id: user.id,
        email: user.email,
        username: user.username,
        access_token
      })
    })
    .catch(err => {
      next(err)
    })
  }

  static register(req, res, next) {
    const { username, email, password } = req.body

    User.create({
      username, email, password
    })
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = Controller