const router = require('express').Router()
const NilaiController = require('../app/controllers/NilaiController')

router.get('/siswa/:nis', NilaiController.getNilaiBySiswa)
router.get('/matkul/:id_matkul', NilaiController.getNilaiByMatkul)
router.post('/', NilaiController.addNilai)
router.put('/:id', NilaiController.updateNilai)
router.delete('/:id', NilaiController.deleteNilai)

module.exports = router