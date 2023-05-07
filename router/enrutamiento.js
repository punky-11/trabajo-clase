const rutaMascota = require('../controller/mascotas');
const express = require('express');
const router =express.Router();


router.get('/mascotas',rutaMascota.mascotas);
router.get('/mascota1',rutaMascota.registrar);
router.post('/mascota',rutaMascota.registrarNueva);



module.exports=router;