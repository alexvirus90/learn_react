import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import ReactDom from 'react-dom';
import NewComponent from './new';

class App extends Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>App component</h1>
			</div>
		);
	}
}

ReactDom.render(
  <Router>
	<Route path={"/"} component={ App } />
	<Route path={"new"} component={ NewComponent } />
  </Router>,
  document.getElementById('app')
);
