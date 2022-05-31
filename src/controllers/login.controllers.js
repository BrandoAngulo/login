import bcryptjs from "bcryptjs";
import { getConnection } from "./../database/database";

//Views index
const viewIndex = async (req, res) => {
    try {
        const connection = await getConnection();
        /* const result = await connection.query("SELECT * FROM login ");
        res.json(result); */
        res.render('index', { msg: 'Desde Node' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Views Login
 const viewLogin = async (req, res) => {
    try {
        const connection = await getConnection();
        /*const result = await connection.query("SELECT * FROM login ");
        res.json(result); */
        res.render('login');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}; 

//Views register
const viewRegister = async (req, res) => {
    
    try {
        const connection = await getConnection();
        res.render('register');

    } catch (error) {
        res.status(500);
        res.send(err.message);
    };
};

//enviar register
const addUser = async (req, res)=>{

    try {
        const {nombre, cedula, departamento, ciudad, direccion, correo,  celular, referido, rol, pass} = req.body;
        
        if (nombre === undefined || cedula === undefined || departamento === undefined || ciudad === undefined || direccion === undefined || correo === undefined ||  celular === undefined || referido === undefined || rol === undefined || pass === undefined ) {
            res.status(400).json({message: "Bad Pequest. please fill all field "});
        };

        let passHash = await bcryptjs.hash(pass, 8);
        const datos = {nombre, cedula, departamento, ciudad, direccion, correo,  celular, referido, rol, pass:passHash};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuario SET ?",datos);
        res.json("Message:  User added");
        console.log(result);
    } catch (error) {
        res.status(error);
        res.send(error.message);
    }
};

export const methods = {
    viewIndex,
    viewLogin,
    viewRegister,
    addUser
};