const router = require('express').Router()
const user = require('./user')
const wishlist = require('./wishlist')
const { authenticate } = require('../middlewares/auth')

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'hello world' })
})

router.use('/user', user)
router.use(authenticate)
router.use('/wishlists', wishlist)

module.exports = {
  router
}