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

router.get('/new', (req, res) => {
    res.render('new')
})

router.get('/:arrayIndex', (req,res) => {
    const { arrayIndex } = req.params
    const index = Number(arrayIndex)
    res.render('show', {
        app: App[index]
    })
})

router.post('/', (req, res) => {
    if (req.body.subscriber === 'on') {
        req.body.subscriber = true
    } else {
        req.body.subscriber = false
    }
    App.push(req.body)
    res.redirect('/apps')
})

module.exports = router