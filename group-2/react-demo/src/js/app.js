import React, { Component } from "react";
import ReactDOM from "react-dom";

class Test extends Component {
	render() {
		return (<h1>Welcome to Target Practice!</h1>);
	}
}

ReactDOM.render(<Test />, document.getElementById("test"));