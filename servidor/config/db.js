const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../variables.env') });

// Depuración
console.log('Ruta del archivo .env:', path.join(__dirname, '../variables.env'));
console.log('DB_MONGO:', process.env.DB_MONGO);

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        } )
        console.log('DB Connected!');
        
    } catch (error) {
        console.log(error);;
        process.exit(1); 
    }
}

module.exports = conectarDB;