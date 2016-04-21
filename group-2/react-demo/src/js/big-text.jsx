import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class BigText extends Component {
	constructor(props) {
		super();
		this.state = {
			text : "Hello World!"
		};
	}

	render() {
		return (
			<div>
				<p>This is some Big Text!</p>
				<p>{ this.state.text }</p>
			</div>
		)
	}
}