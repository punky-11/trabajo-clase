const mongoose = require('mongoose')

const uri ='mongodb+srv://adminADSI:Santihg123@adsiprueva.treym02.mongodb.net/Mascotas?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true });
