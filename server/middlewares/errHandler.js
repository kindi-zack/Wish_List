
function errHandler(err, req, res, next) {
    switch(err.name) {
        case "SequelizeUniqueConstraintError":
        case "SequelizeValidationError":
            const {errors} = err
            let errMsg = []
            errors.forEach(el=> {
                errMsg.push(el.message)
            });
            res.status(400).json(errMsg)
            break;

        case "login": 
            res.status(400).json(err.msg)
            break;
            
        default:
            res.status(500).json(err)
            break;
    }
}

module.exports = {
    errHandler
}