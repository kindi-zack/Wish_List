const userRouter = require('express').Router()
const UserController = require('../controllers/userController')

userRouter.post('/register', UserController.register);

module.exports = userRouter