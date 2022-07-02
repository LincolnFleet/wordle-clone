import React from "react";
import "./main.css";

interface Props {
	children?: JSX.Element[];
}

function Main(props: Props): JSX.Element {
	return (
		<main data-testid="main">
			<div>~~~main~~~</div>
		</main>
	);
}

export default Main;
