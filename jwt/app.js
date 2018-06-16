const express = require('express')

const app = express()

const authControler = require('./src/auth/AuthController')

app.use('/auth', authControler)

module.exports = app
