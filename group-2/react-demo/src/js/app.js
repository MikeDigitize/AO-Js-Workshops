import React, { Component } from "react";
import ReactDOM from "react-dom";
import BigText from "./big-text";

class Test extends Component {

	render() {
		return (
			<BigText/>
		);
	}
}


ReactDOM.render(<Test />, document.getElementById("test"));