/*import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: [],
			number: 0,
			header: "Header from state..",
			"content": "Content from state...",
			inputText:"inputText",
			myDateNumber: "myDateNumber"
		}

		this.setStateHandler = this.setStateHandler.bind(this);
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
		this.setNewNumber = this.setNewNumber.bind(this);
		this.updateState = this.updateState.bind(this);
		this.updateMyNumber = this.updateMyNumber.bind(this);


		

	}
	setStateHandler(){
		var item = "setState...";
		var myArray = this.state.data;

		myArray.push(item);
		this.setState({
			data: myArray
		})
	};
	forceUpdateHandler(){
		this.forceUpdate();
	};
	findDomNodeHandler(){
		var myDiv = document.getElementById("myDiv");
		ReactDOM.findDOMNode(myDiv).style.color = "green";
	};
	setNewNumber(){
		this.setState({
			number: this.state.number + 1
		});
	};
	updateState(e){
		this.setState({
			inputText: e.target.value
		})
	};
	updateMyNumber(e){
		this.setState({
			myDateNumber: e.target.value
		})
	};

	render(){
		return (
			<div>
				<div>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
					{this.props.children}
				</div>
				<h1>{this.state.header}</h1>
				<h2>{this.state.content}</h2>
				<h1>{this.props.header}</h1>
				<h2>{this.props.content}</h2>
				<Header />
				<Content />
				<button onClick={this.setStateHandler}>SET STATE</button>
				<h4>State Array: {this.state.data}</h4>
				<button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
				<h4>Random number: {Math.random()}</h4>
				<button onClick={this.findDomNodeHandler}>Find DOME Node</button>
				<h4 id="myDiv">Node</h4>

				<button onClick={this.setNewNumber}>INCREMENT</button>
				<Period myNumber={this.state.number}></Period>

				<input type="text" value={this.state.inputText} onChange={this.updateState} />
				<h4>{this.state.inputText}</h4>

				<Content1 myDateNumber={this.state.myDateNumber} updateMyNumber={this.updateMyNumber}></Content1>
			</div>
		);
	}
}

class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>Header</h1>
			</div>
		)
	}
}

class Content extends React.Component{
	render(){
		return(
			<div>
				<h2>Content</h2>
			</div>
		)
	}
}

class Period extends React.Component{
	componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

   render(){
   	return(
   		<div>
   			<h3>{this.props.myNumber}</h3>
   		</div>
   	);
   }


}

class Content1 extends React.Component {
	render(){
		return(
			<div>
				<input type="text" value={this.props.myDateNumber} onChange={this.props.updateMyNumber} />
				<h4>{this.props.myDateNumber}</h4>
			</div>
		)
		
	}
}

export default App;*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}

export default App;