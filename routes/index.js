const router = require('express').Router()
const mahasiswaRouter = require('./mahasiswa.routes')
const matakuliahRouter = require('./matakuliah.routes')
const nilaiRouter = require('./nilai.routes')

/* GET home page. */
router.get('/', (req, res) => {
  return res.json({
    message: "Not found"
  })
});
router.use('/api/mahasiswa', mahasiswaRouter)
router.use('/api/matakuliah', matakuliahRouter)
router.use('/api/nilai', nilaiRouter)

module.exports = router;
