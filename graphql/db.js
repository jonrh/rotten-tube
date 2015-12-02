import Sequelize from 'sequelize';

// Create a mysql connection to the Amazon RDS instance.
// Change the credentials before deploying.

var Connection = new Sequelize('_DB-name_', '_user-name_', '_password_', {
	dialect: 'mysql',
	host: 'rottentube.cpaepwofqo5u.us-west-2.rds.amazonaws.com'
	}
);

// Authenticate and export the connection.
Connection.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

export default Connection;
