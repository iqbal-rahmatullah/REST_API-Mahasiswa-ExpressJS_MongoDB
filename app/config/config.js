const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/db_lms',)
    } catch (error) {
        console.log(error);
    }
}

connect()

module.exports = mongoose.connection