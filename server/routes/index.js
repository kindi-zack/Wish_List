const router = require('express').Router()
const userRouter = require('./user')

router.get('/', (req, res)=> {
    res.send('<h1>WISH LIST</h1>')
})

router.use(userRouter)


module.exports = router