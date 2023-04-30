const router = require('express').Router()

const App = require('../models/app')

router.get('/', (req, res) => {
    res.render('index', {
        apps: App
    })
})

router.get('/comments', (req, res) => {
    // connect to DB - fetch real comments from DB
    res.send(([
        {"comment": "Lots of rainfall!"},
        {"comment": "Thunderstorm had golf ball sized hail!"}
    ]))
})

router.get('/:arrayIndex', (req,res) => {
    const { arrayIndex } = req.params
    const index = Number(arrayIndex)
    res.send(App[index])
})

module.exports = router