const router = require('express').Router()
const WishlistController = require('../controllers/wishlist')
const { authorize } = require('../middlewares/auth')

router.post('/', WishlistController.makeStatus)
router.put('/:id', WishlistController.likeStatus)
router.delete('/:id', authorize, WishlistController.deleteStatus)

module.exports = router