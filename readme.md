#React JS [Quickstart]
This is super quick ,lets get stuff started pack for React JS


## NPM Me!
Here's a list of stuff you're going to need. If you don't want to spend time installing each one of them, just download the `package.json` and do `npm install` and that'll take care of everything.

OR if you have your own package.json, just include this ::

```
"dependencies": {
    "babel-preset-es2015": "^6.22.0",
    "jquery": "^3.1.1",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-router": "^2.0.1",
    "webpack": "^2.2.0-rc.1"
  },
  "devDependencies": {
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-preset-react": "^6.22.0",
    "html-webpack-plugin": "^2.26.0",
    "webpack": "^2.2.0-rc.1",
    "webpack-dev-server": "^1.16.2"
  }
```

</br>
Dont forget to change the author details in the `package.json`

##Run it NOW!
To run it , go to `package.json` and define stuff in the `scripts` section.
```
"scripts": {
    "production": "webpack -p",
    "start": "webpack-dev-server"
  }
```
</br>
To start a server : `npm run start`</br>
To bundle everything and minify it for production : `npm production`</br>
</br>

If you want to close a running server and start it agian but have ERR due to the port, do : `fuser -k 8080/tcp` in your bash.
</br>

## Webpacked
So, this webpack thing, it takes all your different files and included JS code and bundles it all together into one single file.
Check out `webpack.config.js`

</br>
Where the packing begins : 
```
entry: [
    './app/index.js'
  ],
  ```
 </br>
 Where the packed file is generated
 ```
 output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  ```
  </br>
  What loaders do : take all files that start have extension `js` and modify them using `babel-loader`. Exclude `node_modules`.
  ```
  loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  ```
  </br>
  Also, our `index.html` points to `index.js` which is in `/app` but we want it to also be reflected in `/dist` so, we use the plugin to generate another `index.html` and have it point to `index_bundle.js`.
  </br>
  ```
  var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
```
</br>
To pack it all together : ` ./node_modules/webpack/bin/webpack.js --config webpack.config.js `
</br>
## A Component you say!
So, basically, all HTML UI and functionality is separated out into its individual components. It's pretty amazing. There are presentational components that only take care of UI rendering. There are container components that make sure functionality is retained. I'm not going to go into much details. Below, you will find basic building blocks for a component.

First, in the index.html, do this : `<div id="app"></div>` in the body tag. This lets the `index.js` know where to render stuff from our main APP component.
</br>

`var React = require('react');` is needed for all the places that you've created a component. A component is just a `<name>.js` file.
</br>
`var ReactDOM = require('react-dom');` typically only used once in the main component that renders stuff.</br>
Use it so: `ReactDOM.render(<stuff you want to render to the <div> with id=app>, document.getElementById('app'));`</br>

Lets get inside the component and see what's what :
```
var someClassName = React.createClass({}); //<------------ how you're going to create a class. You gotta pass an object into it.
var someVariableValue= "How is this even here?";
//stuff that's going to go in the curly braces of the someClassName thingy on the top ::
{
render: function() {   //render is what you're going to push out.
    return (
    <div> Looks like HTML, but is actually JSX 
    //To have stuff printed out to the page, just put it inside the curly braces.
    <p> some text cometh this way {this.someVariableValue} </p>
    //To include child components and pass in some parameters. 
    <ChildComponentName param={this.props.param}/>
    </div>
    )
}
```
</br>
and to export this stuff, just do : `export default someClassName` OR `module.exports = someClassName;` </br>
to import a component (which becomes a child component) write either of the following :
`import <classname> from '(path)/filename; //incase you use ES6` OR `var className = require('(path)filename');`</br>

## How Routes work
Create a JS file called `routes.js`. Include stuff that I've written below:
```
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var ComponentName = require('(path)/filename');
```
</br>
Then, to create routes, just do the following
```
var routes=(
	<Router>
	<Route path='/' component = {MainComponent}>
		//if you want to keep a default route to a particular component and not have to put in the /name , use IndexRoute
		<IndexRoute component={MainHome}/> //MainHome is always loaded.
		<Route path='/CC1' component={childComponent1}/>
		<Route path='/CC2' component={childComponent2}/>
	</Route>
	</Router>
);
```
</br>
and finally, export it.
</br>
`module.exports = routes;`
</br>
back in the `index.js`, render this file instead of all other files.
```
var routes = require('(path)routes');
ReactDOM.render(routes, document.getElementById('app'));
```
and that's how easy it is to route stuff.

</br>
That's pretty much the basics of it all.

More info to come soon.

## API Reference
React has an amazing [documentation page](https://facebook.github.io/react/docs/hello-world.html). 


## Tests
Right now I've just tried to make things work, debugging through the console. I'll learn [Mocha](https://mochajs.org/) and then right unit tests for it later.

## Contributors
If you want to contribute or add to it or make it better, more readable, go for it. Email me issues if you can  : [shreyas](mailto:shreyas.enug@gmail.com) 

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">ReactJS Quickstart</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Shreyas Gune</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

  
 
