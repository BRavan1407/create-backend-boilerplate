import mysql from "mysql2"; 

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        console.error("Error while fetching the data from the database", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});

export default connection;
