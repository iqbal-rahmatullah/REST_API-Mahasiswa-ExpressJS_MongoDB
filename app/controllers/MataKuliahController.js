const MataKuliah = require('../models/MataKuliah')
const mongoose = require('mongoose')

const MataKuliahController = {
    getMataKuliah: async (req, res) => {
        try {
            const data = await MataKuliah.find()
            res.status(200).json({
                message: "Data berhasil di ambil",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: "Terjadi kesalahan server",
                error: error.message
            })
        }
    },
    getOneMataKuliah: async (req, res) => {
        try {
            const data = await MataKuliah.findById(req.params.id)
            res.status(200).json({
                message: "Data berhasil di ambil",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: "Terjadi kesalahan server",
                error: error.message
            })
        }
    },
    addMataKuliah: async (req, res) => {
        try {
            const data = await MataKuliah.create(req.body)
            res.status(200).json({
                message: "Data berhasil di tambahkan",
                data: data
            })
        } catch (error) {
            if (error.name === "ValidationError") {
                const validationErrors = {}
                for (const data in error.errors) {
                    validationErrors[data] = error.errors[data].message
                }
                res.status(400).json({
                    message: "Validation Error",
                    error: validationErrors
                })
                return;
            } else {
                res.status(500).json({
                    message: "Terjadi kesalahan server",
                    error: error.message
                })
            }
        }
    },
    deleteMatakuliah: async (req, res) => {
        try {
            const data = await MataKuliah.findByIdAndDelete(new mongoose.Types.ObjectId(req.params.id))
            if (data.deletedCount === 0) {
                res.status(400).json({
                    message: "Data tidak di temukan",
                    data: {
                        _id: req.params.id
                    }
                })
                return;
            }
            res.status(200).json({
                message: "Data berhasil di hapus",
                data: {
                    _id: req.params.id
                }
            })
        } catch (error) {
            res.status(500).json({
                message: "Terjadi kesalahan server",
                error: error.message
            })
        }
    },
    updateMataKuliah: async (req, res) => {
        try {
            const data = await MataKuliah.findByIdAndUpdate(new mongoose.Types.ObjectId(req.params.id), req.body)
            if (data.updatedCount === 0) {
                res.status(400).json({
                    message: "Data tidak ditemukan",
                    data: {
                        id: req.params.id
                    }
                })
                return;
            }

            res.status(200).json({
                message: "Data berhasil di update",
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

module.exports = MataKuliahController