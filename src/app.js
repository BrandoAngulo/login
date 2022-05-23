import express from "express";
import morgan from 'morgan';
//importar archivo dnde se ubica la Ruta
import login from "./routes/login.routes";

const app=express();

//settings
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));

//llamar las Routes o rutas
app.use("/project/login",login);

//seteamos urlencoded para capturar los datos del formulario y no tener errores
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//
app.use('/project/login',express.static('login'));
app.use('/project/login', express.static(__dirname + 'login'));
console.log(__dirname);

export default app;