import mysql from 'mysql2'


const con = mysql.createConnection({
    host: "blkrfyuawx1ud8iweanh-mysql.services.clever-cloud.com",
    user: "u7w6iprnwfmhqlcc",
    password: "GxJYmzOo3yyNMsRLzdye",
    database: "blkrfyuawx1ud8iweanh",
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
