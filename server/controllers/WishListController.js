const { User, Wishlist } = require('../models')

class WishListController {
    static findwl(req, res, next) {
        Wishlist.findAll({
            // include: {
            //     model: User
            // }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static deletewl(req, res, next) {
        const { id } = req.params
        Wishlist.destroy({
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json({
                "message": "Successfully delete Wishlist",
                saldo: ''
            })
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    static addWishList(req, res, next) {
        const IdUser = req.decoded.id
        const { name, image_url, description, price } = req.body

        Wishlist.create({
            name, image_url, IdUser, description, price
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = {
    WishListController
}