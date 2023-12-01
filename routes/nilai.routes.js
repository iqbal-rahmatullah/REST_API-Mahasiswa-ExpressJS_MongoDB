const router = require('express').Router()
const NilaiController = require('../app/controllers/NilaiController')

router.get('/', (req, res) => { res.json('kocak') })

module.exports = router