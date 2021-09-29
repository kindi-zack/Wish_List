const router = require('express').Router()
const userRouter = require('./user')
const wlRouter = require('./wishlist')
const { authenticate } = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.send('<h1>Wish List</h1>')
})

router.use('/user', userRouter)
router.use(authenticate)

router.use('/wishlist', wlRouter)

module.exports = router