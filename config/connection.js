//set up mysql connection
var mysql = require("mysql");
 var connection;
 if (process.env.JAWSDB_URL) {

  connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else{
     connection= mysql.createConnection({
     host: "localhost",
     port: 3306,
     user : "root",
     password:"Jim!2018",
     database: "burger_db"
 });
};

 //make connection
 connection.connect(function(err) {
     if (err) {
         console.error("error connecting: " + err.stack);
         return;
         
     }
    console.log("connected as id" + connection.threadId);
 });

 //export connection for our orm to use
 module.exports = connection;