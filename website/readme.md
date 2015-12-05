# RottenTube React front-end website
This folder contains code for the website. The front-end is a single page web
app written in [React](https://facebook.github.io/react/).

There are two versions of the site in two folders: */sources/using_graphql* and 
*/sources/using_rest*. The primary difference is the GraphQL version does one 
query to fetch a graph of all the data needed, minimising round trips.

## Notes
1. Initially we were going to exclusively use *material-ui* for the UI. However we 
discovered it requires a bit more CSS work than we had time for. We therefore 
took up React-Bootstrap that provides us with more ready-to-use UI.

2. Initial plans were also to use [Redux](http://redux.js.org/) for state 
management. However we unfortunately ran out of time so we didn't have time to 
explore it.

3. You'll see in the React components that we initiate calls to the API. We realize 
this is not proper but we do it for the sake of simplicity. This assignment was 
primarily about getting our hands dirty with REST and GraphQL, not constructing 
a beautiful React app on the inside.

4. In retrospect we realised that using React for such a simple web app was 
a total overkill. Manual DOM manipulation with jQuery would probably have been 
more suitable given the UI was not the focus of the assignment.

5. The GraphQL version of the site is not fully using GrapqhQL. For example when 
we submit a channel review we still use the REST API. This is because we didn't 
have time to implement a mutation scheme in GraphQL.

## How to run
Please note that this native web app depends on the REST API, it expects it to 
be up and running on *localhost* on port 3000. Please see 
`rotten-tube/rest/readme.md` for instructions to get it up and running. 

If you just cloned the repository open up a terminal and be located in the 
`rotten-tube/website/` folder, then do:

```
npm install
```

This will tell the *npm* package manager to fetch any third party dependencies 
we might be missing (like React). It will create the folder *node_modules*. Next 
you have two options.

### I just want to run the web app
If you just want to run the website run this command on the terminal:

```
npm run build
```

This will generate the file `/dist/bundle.js`. Next simply open 
`/dist/index.html` in a browser and voilà ＼(^o^)／

### How to develop/change the web app
If you want to actively work on the website run the following in a terminal:

```
npm run webpack
```

This will fire up Webpack in watch mode. That is, it'll keep running and remake 
the *bundle.js* file every time it detects a relevant file change (save file). 
Then simply open `/dist/index.html` in a browser. Note that this is a pretty 
simple set up, on every change you'll have to refresh the page. We didn't get 
into proper development setup like 
[webpack-dev-server](https://github.com/webpack/webpack-dev-server) to get hot 
reloading and other such goodies.
 
## Libraries and tools used
* [Webpack v1.12](https://webpack.github.io/), a module bundler
* [Babel 6](https://babeljs.io/), transpiles our ES6 JavaScript code so it can 
run on today's browsers
* [React](https://facebook.github.io/react/), a library for building the 
skeleton to our user interface 
* [React-Bootstrap](https://react-bootstrap.github.io/), React bindings to the 
[Bootstrap](http://getbootstrap.com/) UI framework. Basically gives us a bunch 
of styled component and helps us create a responsive UI.
* [material-ui](http://www.material-ui.com/#/), React bindings to Google's 
[Material Design](https://www.google.com/design/spec/material-design/introduction.html)
framework.

## Files and folders
* **dist**: Folder containing static assets like Html5, CSS and the *bundle.js* 
file. Note that ideally this folder should all be generated but for simplicity 
we cheated by putting some source files into it (notably *index.html* and 
*main.css*). Ideally all files written and maintained by us should be in the 
*source* folder and then shoveled over by webpack 
[plugin](https://github.com/kevlened/copy-webpack-plugin).
* **source** The JavaScript source files for the project
    * **data_fetching**: Folder containing JavaScript code to interact with the 
    REST and GraphQL server endpoints
    * **using_grapqhl**: The website if it would use GraphQL
    * **using_rest**: The website if it would use the REST API
* **package.json**: [npm project file](https://docs.npmjs.com/files/package.json)
 specifying for example what third party code the project depends on.
* **webpack.config.js** Webpack configuration file, see docs 
[here](http://webpack.github.io/docs/configuration.html)