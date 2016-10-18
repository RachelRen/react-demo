import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component{
	render(){
		var url = require('../src/images/1.jpg');
		return (
			<div>
				<h1>About...</h1>
				<img src={url} />
			</div>
		)
	}
}

export default About;