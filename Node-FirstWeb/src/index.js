//para cargar = npm run dev

const express=require('express');
const app=express();

//para que los "/" puedan ser iguales tanto en windows como linux
//se usa en las rutas
const path = require('path');

//CONFIGURACIONES
//para no poner el port muchas veces, solo se coloca una vez el numero y luego solo se llama
app.set('port', 4000);

app.set('views', path.join(__dirname, 'views'));

//esto funciona para que un archivo html pueda funcionar como un archivo .ejs
app.engine('html', require('ejs').renderFile);

//el motor de plantilla que vamos a usar de ejs
app.set('view engine', 'ejs');


//funciones que se ejecutan antes que las rutas procesen algo : middlewares


//rutas
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//escuchando el servidor
app.listen(app.get('port'), () => 
{
    console.log('Server on port', app.get('port'))
});

