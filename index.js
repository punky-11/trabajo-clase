const express = require('express');
const app = express();
const path=require('path');
const morgan=require('morgan');
const mascota=require('./models/mascota');




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(morgan('dev'));

app.use(express.json())
//es como que esta bien la peticion y hace no se envie basio lo de la base de datos
app.use(express.urlencoded({extends:false}))
const PORT= process.env.PORT || 5600;



app.get('/mascotas',async(req, res)=>{
    
    let listaMascotas = await mascota.find();

    res.render('listaMascotas',{

        "mascota":listaMascotas,

    })   
});



app.get('/registrar', (req, res)=>{

    res.render('registrar');

});

app.post('/registrar', async(req, res)=>{

    const nuevaMascota = new mascota({ 
    idMascota:req.body.idMascota,
    nombre:req.body.nombreMacota,
    raza:req.body.razaMacota,
    edad:req.body.edadMacota,
    });

    const registrar = nuevaMascota.save();

    let listaMascotas = await mascota.find();

    res.redirect('mascotas')
});


//checkProjectExists :Este módulo se usa comúnmente para crear, leer, actualizar, eliminar y renombrar un archivo
//eliminar
app.get('/borrar/:id',  (req, res) => {
    const id = req.params.id;
     mascota.collection('Mascotas').delete(id);
    res.redirect('/mascotas');
  });


app.listen(PORT, ()=>{
    console.log('estoy en linea desde el puerto: '+ PORT);
});