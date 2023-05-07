const express = require('express');

//constructor (const app =)
const app = express();
const path=require('path');
const morgan=require('morgan');

//coasaq que no queremos subir 
const dotenv =require('dotenv')

dotenv.config();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(morgan('dev'));

app.use(express.json())
//es como que esta bien la peticion y hace no se envie basio lo de la base de datos
app.use(express.urlencoded({extends:false}))

//PUERTO
const PORT= process.env.PORT ;




 app.get("/borrar/:id", async (req, res) => {
    let id = req.params.id
    await mascota.findByIdAndDelete({"_id": id})
    
    res.redirect("mascotas")
})



const router = require('./router/enrutamiento')
app.use('/api/v1/',router)





app.listen(PORT, ()=>{
    console.log('estoy en linea desde el puerto: '+ PORT);
});



