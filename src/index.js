import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{

	render() {
		return (
			<div>
				<h1>App works!</h1>
				<h3>It's really working!</h3>
			</div>
		);
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
);
