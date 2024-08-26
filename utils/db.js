import mysql from 'mysql2'

// const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admins",
    database: "employeems",
    port: "3306"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error : "+err)
    } else {
        console.log("Connected")
    }
})

export default con;

