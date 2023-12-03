const mongoose = require('mongoose')
const Nilai = require('../models/Nilai')

const NilaiController = {
    getNilaiBySiswa: async (req, res) => {
        try {
            const data = await Nilai.find({ nis_siswa: req.params.nis })
            if (data.length === 0) {
                res.status(400).json({
                    message: "Data tidak ditemukan",
                    data: {
                        nis: req.params.nis
                    }
                })
                return;
            }
            res.status(200).json({
                message: "Data berhasil ditemukan",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: "Terjadi kesalahan server",
                error: error.message
            })
        }
    },
    getNilaiByMatkul: async (req, res) => {
        try {
            const data = await Nilai.find({ id_matkul: new mongoose.Types.ObjectId(req.params.id_matkul) })
            if (data.length === 0) {
                res.status(400).json({
                    message: "Data tidak ditemukan",
                    data: {
                        id_matkul: req.params.id_matkul
                    }
                })
                return;
            }

            res.status(200).json({
                message: "Data berhasil di temukan",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: "Terjadi kesalahan server",
                error: error.message
            })
        }
    },
    addNilai: async (req, res) => {
        try {
            const data = await Nilai.create(req.body)
            res.status(200).json({
                message: "Data berhasil di tambahkan",
                data: data
            })
        } catch (error) {
            if (error.name === "ValidationError") {
                const message = {}
                for (field in error.errors) {
                    message[field] = error.errors[field].message
                }

                res.status(400).json({
                    message: "Validasi Gagal",
                    erorr: message
                })
                return;
            }
            res.status(500).json({
                message: "Terjadi kesalahan server",
                erorr: error.message
            })
        }
    },
    updateNilai: async (req, res) => {
        try {
            const data = await Nilai.findByIdAndUpdate(new mongoose.Types.ObjectId(req.params.id), req.body)

            if (data.updatedCount === 0) {
                res.status(400).json({
                    message: "Data tidak ditemukan",
                    data: {
                        _id: req.params.id
                    }
                })
                return;
            }

            res.status(200).json({
                message: "Data berhasil terupdate",
                data: req.body
            })
        } catch (error) {
            res.status(500).json({
                message: "Terjadi kesalan server",
                error: error.message
            })
        }
    },
    deleteNilai: async (req, res) => {
        try {
            const data = await Nilai.findByIdAndDelete(new mongoose.Types.ObjectId(req.params.id));
            if (data.deletedCount === 0) {
                res.status(400).json({
                    message: "Data tidak ditemukan",
                    data: {
                        _id: req.params.id
                    }
                })
                return;
            }

            res.status(200).json({
                message: "Data berhasil di hapus",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: "Terjadi kesalahan server",
                error: error.message
            })
        }
    }
}

module.exports = NilaiController