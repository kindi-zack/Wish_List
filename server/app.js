require('dotenv').config()
const express = require('express')
const { router } = require('./routes/index')
const errHandler = require('./middlewares/errHadler')
const app = express()
const port = 7000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)
app.use(errHandler)

app.listen(port, () => console.log(`app running on port ${port}`))

