const Mahasiswa = require('../models/Mahasiswa')

const MahasiswaController = {
    getSiswa: async (req, res) => {
        try {
            const response = await Mahasiswa.find()
            res.json({
                message: "Get data success",
                data: response
            }).status(200)
        } catch (error) {
            res.json({
                message: "Terjadi kesalahan",
                error: error.message,
            }).status(500)
        }
    },

    getOneSiswa: async (req, res) => {
        try {
            const response = await Mahasiswa.findOne({ nis: req.params.nis })

            if (!response) {
                res.json({
                    message: "Data tidak ditemukan"
                }).status(400)
            }
            res.json({
                message: "Get data success",
                data: response
            }).status(200)
        } catch (error) {
            res.json({
                message: "Terjadi kesalahan",
                error: error.message,
            }).status(500)
        }
    },
    addSiswa: async (req, res) => {
        try {
            const data = await Mahasiswa.create(req.body)
            res.json({
                message: "Data berhasil di tambahkan",
                data: data
            }).status(200)
        } catch (error) {
            res.json(error)
            if (error.name === 'ValidationError') {
                const validationErrors = {};
                for (const field in error.errors) {
                    validationErrors[field] = error.errors[field].message;
                }

                res.status(400).json({
                    message: "Validasi gagal",
                    errors: validationErrors
                });
            } else {
                console.error(error);
                res.status(500).json({
                    message: "Terjadi kesalahan server",
                    error: error.message
                });
            }
        }
    },
    deleteSiswa: async (req, res) => {
        try {
            const data = await Mahasiswa.deleteOne({ nis: req.params.nis })

            if (data.deletedCount == 0) {
                res.json({
                    message: "Data tidak ditemukan",
                    data: {
                        nis: req.params.nis
                    }
                }).status(400)
            }

            res.json({
                message: "Data berhasil di hapus",
                data: {
                    nis: req.params.nis
                }
            }).status(200)
        } catch (error) {
            res.json({
                message: "Terjadi kesalahan server",
                error: error.message
            }).status(500)
        }
    },
    updateSiswa: async (req, res) => {
        try {
            const data = await Mahasiswa.updateOne({ nis: req.params.nis }, req.body)
            if (data.matchedCount == 0) {
                res.json({
                    message: "Data siswa tidak ditemukan",
                    data: req.params.nis
                }).status(400)
            }

            res.json({
                message: "Data berhasil di update",
                data: req.body
            })
        } catch (error) {
            res.json({
                message: "Terjadi kesalahan server",
                error: error.message
            }).status(500)
        }
    }
}

module.exports = MahasiswaController