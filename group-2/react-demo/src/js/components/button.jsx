import React, { Component } from "react";

export default class BigButton extends Component {
	constructor(props) {
		super();
	}

	styles() {
		return {
			width : "200px",
			height : "80px",
			fontSize : "30px",
			marginTop : "10px"
		}
	}

	render() {
		return (
			<button 
				onClick={ this.props.increment } 
				style={ this.styles() } 
				className="btn btn-success">
					Click me
			</button>);
	}
} 
