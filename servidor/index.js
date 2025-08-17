

const express = require('express');

// Creamos el servidor
const app = express();

// Definir la ruta principal
app.get('/', (req, res) => {
    res.send('Hola, Mundo!')
});

app.listen(4000, () => {
    console.log('Servidor corriendo');
});