
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



exports.registrarNueva= (req, res)=>{

    const nuevaMascota = new mascota({ 
    _id:req.body._id,
    nombre:req.body.nombreMacota,
    raza:req.body.razaMacota,
    edad:req.body.edadMacota,
    });

    nuevaMascota.save();
    //const registrarNueva = nuevaMascota.save();


    //let listaMascotas = await mascota.find();

    res.redirect('/api/v1/mascotas')
};

//eliminar

/*exports.borrar =   (req, res) => {
    const id = req.params.id

    mascota.findByIdAndDelete({"_id": id})
    
    res.redirect("/api/v1/mascotas")

}*/

exports.borrar =  async(req, res) => {
    const id = req.params.id
    await mascota.findByIdAndDelete({"_id": id});
    
    res.redirect("/api/v1/mascotas")

} 