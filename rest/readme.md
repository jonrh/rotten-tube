# RottenTube REST API
This project is the REST API endpoint for the RottenTube project. It's basically 
a small Express program that connects to a MySQL database hosted in Amazon Web 
Services [RDS](https://aws.amazon.com/rds/).

## How to run
The REST server depends on there being a MySQL database running with the schema 
described in `/rotten-tube/mysql/dbtables.sql`.

Open up a terminal and be located in the `/rotten-tube/rest/` folder. Then run:

```
npm install
```

This should create the folder `node_modules` and install our dependencies into 
it. If everything worked run the following command but replacing the content 
of the environment variables:

```
mysql_host="db_path" my_user="user" my_pass="pass" database_name="dbname" node rest_server.js 
```

In our project though we used WebStorm 11 for development so we ran the REST API 
by a configuration. That way we could go into debug mode to help us see what's 
going on while running.

If everything worked `Listening on port 3000...` should have been printed and 
the server should be available at [http://localhost:3000](http://localhost:3000).

## Node environment variables
The REST API uses the following Node environment variables:

* mysql_host
* my_user
* my_pass
* database_name

## Libraries and tools used
* [Node v4.2.2](https://nodejs.org/en/)
* [npm v2.14.7](https://www.npmjs.com/)
* [express](https://github.com/strongloop/express/)
* [felixge/node-mysql](https://github.com/felixge/node-mysql)
* [cors](https://github.com/expressjs/cors)
* [body-parser](https://github.com/expressjs/body-parser)

To see which versions we use please see `package.json`.