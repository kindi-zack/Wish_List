const { WishList } = require('../models')

class WishListController {
    static addWl(req, res, next) {
        const IdUser = req.decoded.id
        const { name, image_url, description, price } = req.body

        WishList.create({
            name, image_url, description, price, IdUser
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = WishListController