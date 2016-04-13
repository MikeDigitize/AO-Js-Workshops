import React, { Component } from "react";
import ReactDOM from "react-dom";

class Test extends Component {
	render() {
		return (<h1>hi!!!</h1>);
	}
}

ReactDOM.render(<Test />, document.getElementById("test"));