const mongoose = require('../config/config');
const { Schema } = require('mongoose')

const matakuliahSchema = new Schema({
    nama: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model('matakuliah', matakuliahSchema)