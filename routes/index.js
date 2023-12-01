const router = require('express').Router()
const mahasiswaRouter = require('./mahasiswa.routes')

/* GET home page. */
router.get('/', (req, res) => {
  return res.json({
    message: "Not found"
  })
});
router.use('/api/mahasiswa', mahasiswaRouter)

module.exports = router;
