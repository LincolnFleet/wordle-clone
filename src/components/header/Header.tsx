import React from "react";
import { noop } from "../../definitions/types";
import "./header.css";

interface HeaderProps {
	setLayoutClass: Function;
}

function Header(props: HeaderProps): JSX.Element {
	return (
		<header data-testid="Header">
			~~~Header~~~
			<button onClick={noop}>Change Layout</button>
		</header>
	);
};

export default Header;
