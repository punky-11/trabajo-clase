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
router.get("/borrar/:id", rutaMascota.borrar);


/*router.delete("/borrar/:_id", rutaMascota.borrar);*/

/*router.delete('/delete/:_id',(req,res)=>{
    const id = req.params._id;
    mascota.findByIdAndDelete({"_id": id})
    res.redirect("/api/v1/mascotas")
})*/



module.exports=router;