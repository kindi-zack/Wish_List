const { WishController } = require('../controllers/wishlist')
const wishRouter = require('express').Router()
const { authenticate, authorize } = require('../middlewares/auth')

wishRouter.use(authenticate)
wishRouter.post('/', WishController.addWl)
// wishRouter.get('/', WishController.showAllWl)
wishRouter.get('/', WishController.showAllWlUser)
wishRouter.delete('/:id', authorize, WishController.deleteWl)

module.exports = {
    wishRouter
}