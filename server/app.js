require('dotenv').config()
const express = require("express")
const router  = require('./routes/index')
const errHandler = require('./helpers/errHalder')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use(router)
app.use(errHandler)

app.listen(port, ()=> console.log(`running on port http://localhost:${port}`));