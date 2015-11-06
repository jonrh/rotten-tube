var mysql      = require('mysql');


connection.connect();
connection.query('select name from names', function(err, rows, fields){
    if(err) throw err;
    console.log(rows);
});

connection.end();