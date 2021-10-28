const { Wishlist, User }  = require('../models')

class WishController{
    static deleteWl(req, res, next) {
        const id = req.params.id
        Wishlist.destroy({
            where: {
                id
            },
            // returning: true
        })
        .then(data => {
            res.status(200).json({msg: 'wishlist Deleted Successfully'})
        })
        .catch(err => {
            next(err)
        })
    }

    static showAllWlUser(req, res, next) {
        Wishlist.findAll({
            where: {
                UserId: req.decoded.id
            },
            include: ['User']
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    // static showAllWl(req, res, next) {
    //     Wishlist.findAll({
    //         include : ["User"]
    //     })
    //     .then(data => {
    //         res.status(200).json(data)
    //     })
    //     .catch(err => {
    //         next(err)
    //     })
    // }
    
    static addWl(req, res, next) {
        let { name, price, image_url, description, UserId = req.decoded.id } = req.body
            name = name === "" ? "unkown" : name;
            image_url = image_url === "" ? "https://ideas.or.id/wp-content/themes/consultix/images/no-image-found-360x250.png" : image_url;
            price = price === "" ? 0 : price;
            description = description === "" ? "no description": description

        User.findOne({
            where: {
                id: req.decoded.id
            }
        })
        .then(user => {
            if(user.saldo < price) throw {name: '', msg: 'saldo tidak cukup'}
            let saldo = user.saldo - price
            return User.update({
                saldo
            },
                {
                where: {
                    id: user.id
                },
                // returning: true
            })
        })
        .then(_ => {
            return Wishlist.create({
                name, image_url, price, description, UserId
            })
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}


module.exports = { WishController }



















