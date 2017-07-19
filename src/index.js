import React, { Component } from 'react';
import ReactDom from 'react-dom';
import NewComponent from './new';

class App extends Component{

	constructor(props) {
		super(props);

		this.state = {
			array: [
				{
					id:1,
					text: 'item 1'
				},
				{
					id:2,
					text: 'item 2'
				},
				{
					id:3,
					text: 'item 3'
				},
			]
		};
	}

	render() {
		return (
			<div>
				<h1>App component</h1>
				<NewComponent array={ this.state.array } />
				<p>{ this.state.timer }</p>
			</div>
		);
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
);
