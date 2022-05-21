import React from "react";
import "./Header.css";
import logo from "./logo.svg";

function Header(props: object): JSX.Element {
	return (
		<header>
			<img src={logo} className="Header logo" alt="logo" />
			<p>
				changed <code>src/Header.tsx</code> and save to reload.
			</p>
			<a
				className="Header link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	);
}

export default Header;
