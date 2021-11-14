function errHandler(err, req, res, next) {
  switch(err.name) {
    case "SequelizeDatabaseError":
      res.status(400).json(err)
      break;

    default:
      res.status(500).json(err)
      break;
  }
}


module.exports = errHandler