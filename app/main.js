/*import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Hello from './component.jsx';
import App from './app.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
require('./index.css');
require('../src/style/main.scss');

main();

function main() {
    // ReactDOM.render(<App header="Header from props..." content="content from props..." />, document.getElementById('app'));
    ReactDOM.render((
	   <Router history = {browserHistory}>
	      <Route path = "/" component = {App}>
	         <IndexRoute component = {About} />
	         <Route path = "home" component = {Home} />
	         <Route path = "about" component = {About} />
	         <Route path = "contact" component = {Contact} />
	      </Route>
	   </Router>
		
	), document.getElementById('component'))
}*/

import React from 'react';
import ReactDOM from 'react-dom';
import GalleryByReactApp from '../src/components/galleryByReactApp.jsx';

main();
function main(){
	ReactDOM.render(<GalleryByReactApp />, document.getElementById('component'))
}
