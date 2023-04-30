const router = require('express').Router()

const App = require('../models/app')

router.get('/', (req, res) => {
    res.send(App)
})

router.get('/:arrayIndex', (req,res) => {
    const { arrayIndex } = req.params
    const Index = Number(arrayIndex)
    res.send(App[arrayIndex])
})
module.exports = router