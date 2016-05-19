import React, { Component } from "react";
import { render } from "react-dom";
import BigButton from "./components/button";
import { Counter } from "./components/counter";

//NOTE: get the store
import { CountStore } from './store/counterstore'

class App extends Component {

	constructor() {
		super();
		this.state = {
			count : 1
		};
	}

	onIncrement() {
		this.setState({
			count : ++this.state.count
		});
	}

	onComponentDidMount(){
		
	}

	render() {
		return (
			<div>
				<BigButton increment= { this.onIncrement.bind(this) }/>
				<Counter count={ this.state.count } />
			</div>
			
		);
	}
}

render(<App />, document.getElementById("app1"));
render(<App />, document.getElementById("app2"));