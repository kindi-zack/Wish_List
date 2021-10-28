const router = require('express').Router()
const { userRouter } = require('./user')
const { wishRouter } = require('./wishlist')

router.get('/', (req, res) => {
    res.status(200).json({msg: 'hallo world'})
})

router.use('/user', userRouter)
router.use('/wishlists', wishRouter)

module.exports = {
    router
}
