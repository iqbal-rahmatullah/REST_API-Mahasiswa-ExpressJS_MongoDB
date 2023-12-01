const router = require('express').Router()
const MataKuliahController = require('../app/controllers/MataKuliahController')

router.get('/', MataKuliahController.getMataKuliah)
router.get('/:id', MataKuliahController.getOneMataKuliah)
router.post('/', MataKuliahController.addMataKuliah)
router.delete('/:id', MataKuliahController.deleteMatakuliah)
router.put('/:id', MataKuliahController.updateMataKuliah)

module.exports = router