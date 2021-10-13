const { User, Wishlist } = require('../models')

class WishlistController{
    static deleteWishlist (req, res, next) {

        
        Wishlist.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            return User.findByPk(req.decoded.id)
        })
        .then(user => {
            res.status(200).json({
                "message": "Successfully delete Wishlist",
                "saldo": user.saldo
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static getWishlist (req, res, next) {
        Wishlist.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static addWishlist (req, res, next) {
        const { name, image_url, description, price } = req.body
        const UserId = req.decoded.id
        
        User.findByPk(UserId)
        .then(user => {
            let saldo = user.saldo
            if(saldo < price) throw { 
                name: 'saldo', 
                current_saldo: user.saldo, 
                msg : 'saldo is not enough'
            }
            return
        })
        .then(_ => {  
            Wishlist.create({
                name, image_url, price, description, UserId
        })
        .then(data => {
            return data
        })
        .then(newData => {
           return Wishlist.findOne({
                where: {
                    id: newData.id
                },
                include: [User]
            })
        })
        .then(new_wl => {
            const user = new_wl.User
            const { saldo } = user
            const minSaldo = saldo - new_wl.price

            return User.update({
                saldo : minSaldo,
            }, {
                where : {
                    id : user.id
                },
                returning: true
            })
        })
        .then(user => {
            const UserId = user[1][0].id
            return Wishlist.findOne({
                where: {
                    UserId
                },
                order: [
                    ['id', 'DESC']
                ],
                include: {
                    model: User
                }
            })
        })
        .then(result => {
            res.status(201).json({
                "name": result.name,
                "price": result.price,
                "image_url": result.image_url,
                "UserId": result.UserId,
                "description": result.description,
                "saldo": result.User.saldo
            })
        })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = {
    WishlistController
}