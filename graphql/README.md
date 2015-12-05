## GraphQL
The GraphQL server. 

## How to run
It's assumed that Node.js v4.2.2 (or later) is installed and there is a MySQL 
database running with the schema described in */mysql.dbtables.sql/* In a 
terminal while being located in the */graphql/* folder run the following:

```
npm install
```

This should create the folder `node_modules` and install our dependencies into 
it. If everything worked run the following command but replacing the content 
of the environment variables:

```
mysql_host="db_path" my_user="user" my_pass="pass" database_name="dbname" node graqphql_server.js 
```

In our project though we used WebStorm 11 for development so we ran the GraphQL 
server by a configuration. In those configurations we put the environment 
variables. By using WebStorm we could go into debug mode to help us see what's 
going on while running.

If everything worked `GraphQL listening at http://:::3001` should have been 
printed and the server should be available at 
[http://localhost:3001/graphql](http://localhost:3001/graphql).
