import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component{

	static propTypes = {
		btnText: PropTypes.string.isRequired,
		h1Text: PropTypes.string.isRequired,
		newArray: PropTypes.array.isRequired
	};

	static defaultProps = {
		btnText: 'default props text'
	};

	btnOnClick(event) {
		console.log("Button clicked!", event);
	}

	render() {
		console.log('array', this.props.newArray);
		// console.log('Props', this.props);
		return (
			<div /*style={{background: 'red'}} */ className="test">
				<h1>{ this.props.h1Text }</h1>
				<h3>It's really working!</h3>
				<button onClick={this.btnOnClick}>{ this.props.btnText /*|| 'Default text'*/}</button>
			</div>
		);
	}
}

ReactDom.render(
<App /*btnText="click on me!"*/ h1Text="This is h1 text." newArray={[1, 2, 3,]}/>,
	document.getElementById('app')
);
