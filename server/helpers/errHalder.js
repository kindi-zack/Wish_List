function errHandler (err, req, res, next) {
    switch(err.name) {
        case "SequelizeUniqueConstraintError":
        case "login":
        case "SequelizeValidationError":
            res.status(400).json(err)
            break;

        default:
            res.status(500).json(err)
    }
}

module.exports = errHandler