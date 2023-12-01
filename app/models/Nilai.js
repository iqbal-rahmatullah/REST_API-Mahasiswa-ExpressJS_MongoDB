const mongoose = require('../config/config')
const { Schema } = require('mongoose')

const NilaiSchema = new Schema({
    id_matkul: {
        type: Number,
        required: true,
    },
    nis_siswa: {
        type: String,
        required: true,
    },
    nilai: {
        type: Number,
        required: true
    }
}
)

module.exports = mongoose.model('nilai', NilaiSchema)