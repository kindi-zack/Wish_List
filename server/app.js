require('dotenv').config()
const express = require('express');
const cors = require('cors')
const router = require('./routes/index')
const {errHandler} = require('./middlewares/errHandler')
const app = express()
const port = 7000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(router)
app.use(errHandler)

app.listen(port, ()=> console.log(`app is running on port http://localhost:${port}/`))