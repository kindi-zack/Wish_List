
function errHandler(err, req, res, next) {
    switch(err.name) {
        case "SequelizeUniqueConstraintError":
        case "SequelizeValidationError":
        case "login":
        case "saldo":
            res.status(400).json(err)
            break;

        default: 
            res.status(500).json(err)
            break;
    }
}

module.exports = {
    errHandler
}