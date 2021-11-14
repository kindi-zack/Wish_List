const jwt = require('jsonwebtoken')
const {User, Wishlist } = require('../models')

function authenticate(req, res, next) {
  try {
    const access_token = req.headers.access_token
    const decoded = jwt.verify(access_token, process.env.SECRET)
    req.decoded = decoded
    next()
  }catch(err) {
    next(err)
  }
}

function authorize(req, res, next) {
  const UserId = req.decoded.id
  const id = req.params.id

  Wishlist.findOne({
    where: {
      id
    },
    include: [User]
  })
  .then(data => {
    if(UserId !== data.UserId) throw { msg: 'unauthorize', belongTo: data.User.username }
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