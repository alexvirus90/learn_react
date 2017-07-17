import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component{

	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};
	}

	inputOnChange(event) {
		const text = event.target.value;
		this.setState({ text });
	}

	render() {
		return (
			<div /*style={{background: 'red'}} */ className="test">
				<h1>Hello</h1>
				<input type="text" value={ this.state.text } onChange={ this.inputOnChange.bind(this) } />
			</div>
		);
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
);
