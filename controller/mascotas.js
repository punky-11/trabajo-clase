
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

/*exports.borrar =  async(req, res) => {
    const id = req.params.id
    await mascota.findByIdAndDelete({"_id": id});
    
    res.redirect("/api/v1/mascotas")
} */

exports.borrar =  async(req, res) => {
    
    await mascota.findByIdAndDelete(id = req.params.id);
    
    res.redirect("/api/v1/mascotas")
} 
//update

/*exports.update = async(req, res) => {
    const id = req.params._id
    const updates =req.body
    await mascotas.findByIdAndUpdate(id,updates,option)
   
/*const actualizar =   findByIdAndUpdate ({
     nombre:req.body.nombreMacota,
     raza:req.body.razaMacota,
     edad:req.body.edadMacota,
});
    actualizar.save()
    res.redirect("/api/v1/mascotas")
};

/*exports.update = async(req, res) => {
    const {nombreMacota,razaMacota,edadMacota} = req.body;
    await mascota.findByIdAndUpdate(req.params.id,{nombreMacota,razaMacota,edadMacota})
    console.log(mas)
    res.redirect("/api/v1/mascotas")
}*/
/*exports.update = async (req, res) => {
    
      const { nombre, raza, edad } = req.body;
      const updatedMascota = await mascota.findByIdAndUpdate(
        req.params.id,
        { nombre, raza, edad  },
        { new: true }
      );
  console.log(updatedMascota)
  res.redirect("/api/v1/mascotas")
      
  };*/


  /*exports.update = async (req, res) =>{
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    res.redirect("/api/v1/mascotas")
  }*/

  /*exports.update = async (req, res) =>{

            const up = await mascota.findByIdAndUpdate({        
             nombre : req.body.nombreMacota,
             edad : req.body.edadMacota,
             raza : req.body.razaMacota
            })
        
        res.redirect("/api/v1/mascotas")
    }*/

 /*exports.Update = async (req, res) => {
        
  const n =await mascota.findOneAndUpdate({
    _id : req.body.mId,
    nombre : req.body.mNombre,
    edad : req.body.mRaza,
    raza : req.body.mEdad
  });
  console.log(req.params)
  console.log(req.body.mNombre)
  console.log(req.body.mRaza)  
  console.log(req.body.mEdad)
console.log(n)
  res.redirect("/api/v1/mascotas")
    }
    */
    /*exports.Update = async (req, res) => {
    let buscarId = await Mascotas.find({id : req.body.id});
    let udpdate = await mascota.updateOne({
        id: req.body.id,
        name : req.body.name,
        raza : req.body.raza});
    }*/

    exports.Update = async (req, res) => {
        
        const n = await mascota.findByIdAndUpdate(
          id = req.params.id,
          {
            nombre: req.body.mNombre,
            edad: req.body.mRaza,
            raza: req.body.mEdad
          }
        );
        console.log(req.params)
        console.log(n);
        res.redirect("/api/v1/mascotas");
      };