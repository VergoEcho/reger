const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')
const authRoutes = require('./routes/auth.routes')
const productRoutes = require('./routes/product.routes')
const commentRoutes = require('./routes/comment.router')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/api/auth', authRoutes)
app.use('/api/product', productRoutes)
app.use('/api/comment', commentRoutes)

module.exports = app

