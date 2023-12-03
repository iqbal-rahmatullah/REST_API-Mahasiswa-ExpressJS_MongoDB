const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const Nilai = require('../models/Nilai');

const generateNilai = (num) => {
    const score = [];

    for (let i = 0; i < num; i++) {
        const nis_siswa = "31225000" + (i + 1);
        const id_matkul = new mongoose.Types.ObjectId("656c4ddf09137221d4f9b458")
        const nilai = faker.number.int({ min: 10, max: 100 })



        score.push({
            id_matkul,
            nis_siswa,
            nilai
        });
    }

    return score;
};

const nilai = generateNilai(29)
Nilai.insertMany(nilai).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

