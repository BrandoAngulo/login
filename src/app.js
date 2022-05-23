import express from "express";
import morgan from 'morgan';
//importar archivo dnde se ubica la Ruta
import login from "./routes/routes";

const app=express();

//settings
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));

//llamar las Routes o rutas
app.use("/api/login",login);
export default app;