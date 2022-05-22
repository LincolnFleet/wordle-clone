import React from "react";
import "./Header.css";
import logo from "../../logo.svg";

function Header(props: object): JSX.Element {
	return (
		<header data-testid="header">
			<img src={logo} className="Header logo" alt="logo" />
		</header>
	);
}

export default Header;
