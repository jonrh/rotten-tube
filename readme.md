# RottenTube
A group programming project in the course Distributed Systems COMP30220,
University College Dublin. The aim of the project is to develop a system that
utilises distributed technologies. For this project we chose to use
[REST](https://en.wikipedia.org/wiki/Representational_state_transfer) and
[GraphQL](http://graphql.org/). The project that we picked was to create a
concept [Rotten Tomatoes](http://www.rottentomatoes.com/) for
[YouTube](https://www.youtube.com/) channels.

## Architecture
RottenTube is a 4 tier application. At the bottom is a MySQL server (will most
likely be AWS hosted). On top of that is a REST web service. On top of that REST
service is a GraphQL server. Finally the consuming application is a prototype
web app that speaks to GraphQL. In this project are 4 sub folders, each 
corresponding to the 4 previously mentioned tiers.

## Team members
* [brettji](https://github.com/brettji)
* [jonrh](https://github.com/jonrh)
* [zyifei](https://github.com/zyifei)
* [Radha13](https://github.com/Radha13)

## Files and folders
* **docs**: Contains other documentation such as assignment description. 
* **graphql**: Contains code for the GraphQL server layer.
* **mysql**: Contains any files we may need regarding the MySQL database, table 
definition, scripts, etc.
* **rest**: Contains code for the REST API.
* **website**: Code for the React front-end web app.
* **.gitignore**: A file that tells Git what files we don't want to submit to 
the repository. For details see [here](http://git-scm.com/docs/gitignore).