import express from "express";
import morgan from 'morgan';
//importar archivo dnde se ubica la Ruta
import login from "./routes/login.routes";
//invocar bcryptjs, es el modulo de hashin de password
import bcryptjs from "bcryptjs";
//creamos constante para hacer uso de brcyptjs
//const bcryptjs = bcryptjs();
//inportamos las variables de session y hacemos uso de ella
import session from "express-session";
//const sessiones = session();

const app=express();

//settings
app.set("port", 4000);


//especificamos el uso de sessiones
 app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
 

//middlewares
app.use(morgan("dev"));

//llamar las Routes o rutas
app.use("/project/login",login);

//seteamos urlencoded para capturar los datos del formulario y no tener errores
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//archivos estaticos recordar todo lo que referenciemos y le asignemos /public son archivos estaticos
app.use('/project/public', express.static('public'));
app.use('/project/public', express.static(__dirname + '/project/public'));
console.log(__dirname);  

//Establecer motor de plantillas Ejs
app.set('view engine','ejs'); 


export default app;