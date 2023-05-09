const rutaMascota = require('../controller/mascotas');
const express = require('express');
const router =express.Router();


router.get('/mascotas',rutaMascota.mascotas);
router.get('/mascota',rutaMascota.registrar);
router.post('/mascota1',rutaMascota.registrarNueva);



module.exports=router;