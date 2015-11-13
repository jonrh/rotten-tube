var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.mysql_host,
    user     : process.env.my_user,
    password : process.env.my_pass,
    database : process.env.database_name
});

connection.connect();
connection.query('select name from names', function(err, rows, fields){
    if(err) throw err;

    var result = rows.map(row => row.name);

    console.log(result);
});

connection.end();