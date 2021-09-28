const router = require('express').Router()
const userRouter = require('./user')

router.get('/', (req, res) => {
    res.send('<h1>Wish List</h1>')
})

router.use('/user', userRouter)


module.exports = router