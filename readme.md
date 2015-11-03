# RottenTube
A group programming project in the course Distributed Systems COMP30220,
University College Dublin. The aim is project is to develop a system that
utilises distributed technologies. For this project we chose to use
[REST](https://en.wikipedia.org/wiki/Representational_state_transfer) and
[GraphQL](http://graphql.org/). The project that we picked was to create a
concept [Rotten Tomatoes](http://www.rottentomatoes.com/) for
[YouTube](https://www.youtube.com/) channels.

## Architecture
RottenTube is a 4 tier application. At the bottom is a MySQL server (will most
likely be AWS hosted). On top of that is a REST web service. On top of that REST
service is a GraphQL server. Finally the consuming application is a prototype
web app that speaks to GraphQL. In this project

## Team members
* [brettji](https://github.com/brettji)
* [jonrh](https://github.com/jonrh)
* [zyifei](https://github.com/zyifei)