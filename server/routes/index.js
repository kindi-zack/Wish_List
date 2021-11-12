const router = require('express').Router()
const user = require('./user')

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'hello world' })
})

router.use('/user', user)

module.exports = {
  router
}