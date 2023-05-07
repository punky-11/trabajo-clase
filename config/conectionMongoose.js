const mongoose = require('mongoose')

const uri ='mongodb+srv://usuario:ontraseña@adsiprueva.treym02.mongodb.net/Mascotas?retryWrites=true&w=majority';
const parametros ={
    usuario: process.env.DATOS_USUARIO,
    contraseña: process.env.DATOS_CONTRA,
    db:process.env.DATOS_DATA
}

mongoose.connect(uri, parametros,{ useNewUrlParser: true });
