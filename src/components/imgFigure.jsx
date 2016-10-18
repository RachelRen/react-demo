import React from 'react';

class ImgFigure extends React.Component{
	constructor(props){
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		if(this.props.arrange.isCenter){
			this.props.inverse();
		}else{
			this.props.center();
		}
		
	}
	render(){
		var styleObj = {};

		if(this.props.arrange.pos){
			styleObj = this.props.arrange.pos;
		}
		if(this.props.arrange.rotate){
			(["MozTransform","msTransform","WebkitTransform","transform"]).forEach((o, i) =>{
				styleObj[o] = "rotate(" + this.props.arrange.rotate + "deg)";
			});
		}

		if(this.props.arrange.isCenter){
			styleObj.zIndex = 11;
		}
		var imgFigureClassName = "img-figure";
		
		imgFigureClassName += this.props.arrange.isInverse ? " is-inverse" : '';
		return(
			<figure className = {imgFigureClassName} style={styleObj} onClick = {this.handleClick}> 
				<img src={this.props.data.url} alt={this.props.data.title}/>
				<figcaption className="img-figcaption">
					<h2 className="img-title">{this.props.data.title}</h2>
					<div className="img-back">
						<p>
							{this.props.data.desc}
						</p>
					</div>
				</figcaption>
			</figure>
		)
	}
}

export default ImgFigure;