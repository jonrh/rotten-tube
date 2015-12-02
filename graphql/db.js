import Sequelize from 'sequelize';

// Create a mysql connection to the Amazon RDS instance.
// Set the credentials as node env variables before deploying.

var Connection = new Sequelize(
        process.env.database_name,
        process.env.my_user,
        process.env.my_pass, {
	dialect: 'mysql',
	host: process.env.database_name
	}
);

// Authenticate and export the connection.
Connection.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

export default Connection;
