const router = require('express').Router();
const Input = requrie('../db/functions.js');


//get route
router.get('/notes', (req, res) => {
    Input
    .grabNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})

//post route

router.post('/notes', (req, res) => {
    Input
    .addNotes(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
})

router.delete('/notes/:id', (req, res) => {
    Input
    .deleteNotes(req.params.id)
    .then(() => res.json({ ok:true}))
    .catch((err) => res.status(500).json(err))
})








module.export = router; 