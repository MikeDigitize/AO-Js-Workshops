import React from "react";

export const Counter = props => (
	<div style={ { fontSize : "30px", textAlign: "center" } }>
		Count: { props.count }
	</div>
);
