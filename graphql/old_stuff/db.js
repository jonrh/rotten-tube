"use strict";

var Sequelize = require("sequelize");

// Create a mysql connection to the Amazon RDS instance.
// Set the credentials as node env variables before deploying.
var Connection = new Sequelize(
    process.env.database_name,
    process.env.my_user,
    process.env.my_pass,
    {
	    dialect: "mysql",
	    host: process.env.mysql_host
	}
);

// Authenticate and export the connection.
Connection.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  }
);

module.exports = Connection;