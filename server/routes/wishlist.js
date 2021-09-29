const routerWL = require('express').Router()
const WishListController = require('../controllers/wishlist')

routerWL.post('/', WishListController.addWl)

module.exports = routerWL