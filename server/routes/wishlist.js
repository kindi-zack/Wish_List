const { WishListController } = require('../controllers/WishListController')
const { authorize } = require('../middlewares/auth')
const wishListRouter = require('express').Router()


wishListRouter.get('/wishlists', WishListController.findwl)
wishListRouter.post('/wishlists', WishListController.addWishList)
wishListRouter.delete('/wishlists/:id', authorize, WishListController.deletewl)

module.exports = {
    wishListRouter
}
