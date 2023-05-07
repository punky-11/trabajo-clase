
const mascota=require('../models/mascota');
//traer productos y mostrar

exports.mascotas= async(req, res)=>{
    
    let listaMascotas = await mascota.find();

    res.render('listaMascotas',{

        "mascota":listaMascotas,

    })   
}


//registrar mascota

exports.registrar=(req , res)=>{

    res.render('registrar')};



exports.registrarNueva= async(req, res)=>{

    const nuevaMascota = new mascota({ 
    _id:req.body.idMascota,
    nombre:req.body.nombreMacota,
    raza:req.body.razaMacota,
    edad:req.body.edadMacota,
    });

    const registrarNueva = nuevaMascota.save();

    let listaMascotas = await mascota.find();

    res.redirect('mascotas')
};



