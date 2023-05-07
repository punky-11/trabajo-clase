
const { default: mongoose } = require('mongoose')

const registrarMAscota = require('../config/conectionMongoose')
 

 const SchemaMascota = new mongoose.Schema({
    //di
    idMascota:{
    type: Number,
    min:0,
    max:1000,
    required:true
    },
//nombre
    nombre:{
        type:String,
        required:true,
        default:"sin nombre"
    },
    //edad
    edad:String,
//raza
    raza:{
        type:String,
        required:true
    }
 });


const mascota = mongoose.model('Mascota', SchemaMascota);

module.exports=mascota;


