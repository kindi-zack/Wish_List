const router = require('express').Router()
const userRouter = require('./user')
const { wishListRouter } = require('./wishlist')
const { authenticate } = require('../middlewares/auth')

router.get('/', (req, res)=> {
    res.send('<h1>WISH LIST</h1>')
})

router.use(userRouter)
router.use(authenticate)
router.use(wishListRouter)

module.exports = router