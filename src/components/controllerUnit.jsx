import React from 'react';

class ControllerUnit extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		if(this.props.arrange.isCenter){
			this.props.inverse();
		}else{
			this.props.center();
		}
	}
	render(){
		var className = "controller-unit";
		className += this.props.arrange.isCenter ? " is-center" : "";
		className += this.props.arrange.isInverse ? " is-inverse" : "";
		return(
			<span className={className} onClick={this.handleClick}></span>
		)
	}
}

export default ControllerUnit;