const wishlistRouter = require('express').Router()
const { authenticate, authorization } = require('../middlewares/auth')
const { WishlistController } = require('../controllers/WishlistController')

wishlistRouter.use('/wishlists', authenticate)
wishlistRouter.post('/wishlists', WishlistController.addWishlist)
wishlistRouter.get('/wishlists', WishlistController.getWishlist)
wishlistRouter.delete('/wishlists/:id', authorization, WishlistController.deleteWishlist)

module.exports = {
    wishlistRouter
}
