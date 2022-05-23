import { getConnection } from "./../database/database";

 const getLogin= async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM login");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}; 

export const methods = {
    getLogin
};