const router = require('express').Router()

const App = require('../models/app')

router.get('/', async (req, res) => {
    const app = await App.find()
    res.render('index', {
        apps: app
    })
})

//router.get('/comments', (req, res) => {
    // connect to DB - fetch real comments from DB
    //res.send(([
      //  {"comment": "Lots of rainfall!"},
      //  {"comment": "Thunderstorm had golf ball sized hail!"}
   // ]))
//})

router.get('/new', (req, res) => {
    res.render('new')
})

router.get('/:id', async (req,res) => {
    const { id } = req.params
    const app = await App.findById(id)
    res.render('show', {
        app: app
    })
})

// router.post('/', (req, res) => {
 //   try {
        //const { username, city, comment } = req.body
        //const createdComment = new Comment({
            //username,
            //city,
            //comment
        //}).save()

        //res.json(createdComment)
    //} catch (error) {
        //console.log(error)
        //res.json({ message: 'error creating comment '})
    //}

router.post('/', async (req, res) => {
    if (req.body.subscriber === 'on') {
        req.body.subscriber = true
    } else {
        req.body.subscriber = false
    }
    await App.create(req.body)
    res.redirect('/apps')
})

router.get('/:id/edit', async (req, res) => {
    const { id } = req.params
    const app = await App.findById(id)
    res.render('edit', {
        app
    })
})

//Update
router.put('/:id', async (req, res) => {
    const { id } = req.params
    if (req.body.subscriber === 'on') {
        req.body.subscriber = true
    } else {
        req.body.subscriber = false
    }
    const updatedApp = await App.findByIdAndUpdate(id, req.body)
    res.redirect(`/apps/${id}`)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedApp = await App.findByIdAndDelete(id)
    res.status(303).redirect('/apps')
})

router.get('/data/seed', async (req, res) => {
    await App.deleteMany()
    const apps = [
        {
            username: 'FourSzns',
            city: 'Colorado',
            comment: 'Perfect day to hit the slopes!',
            subscriber: 'true'
        },
        {
            username: 'EarthWindFire',
            city: 'Miami',
            comment: 'What in the world is this weather?!',
            subscriber: 'true'
        },
        {
            username: 'SunshineDelight',
            city: 'Myrtle Beach',
            comment: 'Sooooo nice out lately!',
            subscriber: 'false'
        }
    ]
    await App.insertMany(apps)
    res.redirect('/apps')
})

module.exports = router