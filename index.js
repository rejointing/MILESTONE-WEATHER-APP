const express = require('express')
require('dotenv').config()

const appRoutes = require('./controllers/app')

const app = express()

app.use('/apps', appRoutes)

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`));
