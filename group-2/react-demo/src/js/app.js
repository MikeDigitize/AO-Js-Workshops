import React, { Component } from "react";
import ReactDOM from "react-dom";
import BigText from "./big-text";
import { Game } from "./game";

Game();

class Test extends Component {
	render() {
		return (
			<div>
				<BigText />
			</div>
		);
	}
}


ReactDOM.render(<Test />, document.getElementById("test"));