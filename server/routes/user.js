const userRouter = require('express').Router()
const UserController = require('../controllers/user')

userRouter.post('/register', UserController.register)


module.exports = userRouter 
