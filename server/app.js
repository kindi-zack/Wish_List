require('dotenv').config()
const express = require("express")
const { errHandler } = require('./middlewares/errHandler')
const { router } = require('./routes')
const app = express()
const port = 4040

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)
app.use(errHandler)

app.listen(port, () => console.log(`ahooo port ${port}`))