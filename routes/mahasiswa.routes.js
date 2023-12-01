const router = require('express').Router()
const MahasiswaController = require('../app/controllers/MahasiswaController')

router.get('/', MahasiswaController.getSiswa)
router.get('/:nis', MahasiswaController.getOneSiswa)
router.post('/', MahasiswaController.addSiswa)
router.delete('/:nis', MahasiswaController.deleteSiswa)
router.put('/:nis', MahasiswaController.updateSiswa)

module.exports = router