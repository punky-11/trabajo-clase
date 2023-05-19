
const { default: mongoose } = require('mongoose')

const registrarMAscota = require('../config/conectionMongoose')
 

 const SchemaMascota = new mongoose.Schema({
    //di
    _id:{
    type: Number,
    min:0,
    max:1000,
    required:true,
    //unique:true
    },
//nombre
    nombre:{
        default:"sin nombre",
        type:String,
        //required:false,
       
    },
    //edad
    edad:{type:String,
        default:"nn"

    },
//raza
    raza:{
        default:"nn",
        type:String,
        //required:false,
        

    }
 });


const mascota = mongoose.model('Mascota', SchemaMascota);

module.exports=mascota;


