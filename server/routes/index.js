const router = require('express').Router()
const { userRouter } = require('./user')
const { wishlistRouter } = require('./wishlist')

router.get('/', (req, res) => {
    res.status(200).json({msg: "success app is running"})
})

router.use('/', userRouter)
router.use('/', wishlistRouter)


module.exports = {
    router
}