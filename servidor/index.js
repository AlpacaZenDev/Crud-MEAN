
const conectarDB = require('./config/db')
const express = require('express');

// Creamos el servidor
const app = express();

// Middleware para parsear JSON
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Conectamos a la DB:
conectarDB();

app.use("/api/productos", require("./routes/producto"));



/**
 * 
 // Definir la ruta principal
 app.get('/', (req, res) => {
     res.send('Hola, Mundo!')
 });
 
 */

app.listen(4000, () => {
    console.log('Servidor corriendo');
});