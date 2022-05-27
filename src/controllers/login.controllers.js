import { getConnection } from "./../database/database";

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

const viewRegister = async (req, res) => {
    
    try {
        const connection = await getConnection();
        res.render('register');

    } catch (error) {
        res.status(500);
        res.send(err.message);
    };
};

export const methods = {
    viewIndex,
    viewLogin,
    viewRegister
};