const mongoose = require('../config/config')
const { Schema } = require('mongoose')

const mahasiswaSchema = new Schema({
    nis: {
        type: String,
        unique: true,
    },
    nama: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
        required: true,
    },
    nohp: {
        type: String,
        required: true,
    },
    ttl: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        default: "images/profile.png"
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('mahasiswa', mahasiswaSchema)