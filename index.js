const express = require('express')
require('dotenv').config()

const appRoutes = require('./controllers/app')

const app = express()

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.static('frontend'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/apps', appRoutes)

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`));
