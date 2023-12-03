const { faker } = require('@faker-js/faker');
const Mahasiswa = require('../models/Mahasiswa');

const generateUsers = (num) => {
    const user = [];

    for (let i = 0; i < num; i++) {
        const nis = "31225000" + (i + 2);
        const nama = faker.person.fullName();
        const alamat = faker.location.streetAddress(false);
        const nohp = faker.phone.number();
        const ttl = "Surabaya , " + faker.date.birthdate({ min: 2000, max: 2008, mode: 'year' })
        const foto = "images/profile.png";

        user.push({
            nama,
            nis,
            alamat,
            nohp,
            ttl,
            foto
        });
    }

    return user;
};

const mahasiswa = generateUsers(29);
Mahasiswa.insertMany(mahasiswa).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
