


// Rutas para producto
const express = require('express');
const router = express.Router();

// POST api/productos
router.post('/', (req, res) => {
    console.log("Creando producto...");
    console.log("Headers:", req.headers);
    console.log("Content-Type:", req.get('Content-Type'));
    console.log("Body recibido:", req.body);
    
    res.status(201).json({
        msg: "Producto creado exitosamente",
        data: req.body
    });
});

module.exports = router;