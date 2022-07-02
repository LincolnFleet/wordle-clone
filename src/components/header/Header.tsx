import React from "react";
import "./header.css";
// import types
import { Props } from "../../modules/definitions"

interface localProps extends Props {
	setLayoutClass: Function;
}

export default function Header({ setLayoutClass }: localProps): JSX.Element {
	return (
		<header data-testid="header">
			~~~Header~~~
			<button onClick={()=>{}}>
				Change Layout
			</button>
		</header>
	);
}
