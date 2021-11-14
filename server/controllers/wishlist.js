const { User, Wishlist } = require('../models')

class WishlistController {
  static deleteStatus(req, res, next) {
    const id = req.params.id
    Wishlist.destroy({
      where: {
        id
      }
    })
    .then(data => {
      res.status(200).json({msg: 'posting success deleted'})
    })
    .catch(err => {
      next(err)
    })
  }

  static likeStatus (req, res, next) {
    const id = req.params.id

    Wishlist.findByPk(id)
    .then(data => {
      let { like } = data
      like++

      return Wishlist.update({
        like
      }, {
        where: {
          id
        },
        returning: true
      })
   
    })
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      err.msg = 'update'
      next(err)
    })
  }
  
  static makeStatus (req, res, next) {
    const { posting } = req.body
    const like = 0
    const UserId = req.decoded.id
    Wishlist.create({
      posting, UserId, like
    })
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      // res.status(500).json({err})
      next(err)
    })
  }
}

module.exports = WishlistController