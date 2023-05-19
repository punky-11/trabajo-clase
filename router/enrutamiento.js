const rutaMascota = require('../controller/mascotas');
const express = require('express');
const router =express.Router();

//trar mascotas
router.get('/mascotas',rutaMascota.mascotas);
//abrir el formulario
router.get('/mascota',rutaMascota.registrar);
//agrega
router.post('/mascota1',rutaMascota.registrarNueva);
//elimina
router.post("/borrar/:id", rutaMascota.borrar);
//update
router.post('/update/:id', rutaMascota.Update);



module.exports=router;