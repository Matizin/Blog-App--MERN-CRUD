import mysql from "mysql";

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"garotogamer12",
    database:"test"
});

connection.connect((err) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log("Connected to db");
});

export default connection;