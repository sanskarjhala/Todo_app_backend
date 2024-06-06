const mongoose = require('mongoose');
require('dotenv').config();

const databaseConnection =  () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Database connected succesfully"))
    .catch((error) =>{
        console.log(error);
        process.exit(1);
    })
}

module.exports = databaseConnection;