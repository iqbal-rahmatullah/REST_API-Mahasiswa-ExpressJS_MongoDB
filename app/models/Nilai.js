const mongoose = require('../config/config')
const { Schema } = require('mongoose')
const Matakuliah = require('./MataKuliah')
const Mahasiswa = require('./Mahasiswa')

const NilaiSchema = new Schema({
    id_matkul: {
        type: Schema.ObjectId,
        required: true,
        ref: Matakuliah
    },
    nis_siswa: {
        type: String,
        required: true,
        ref: Mahasiswa
    },
    nilai: {
        type: Number,
        required: true
    }
}
)

module.exports = mongoose.model('nilai', NilaiSchema)