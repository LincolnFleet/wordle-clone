import React from "react";
import "./header.css";

interface HeaderProps {
	setLayoutClass: Function;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
	return (
		<header data-testid="Header">
			~~~Header~~~
			<button onClick={() => {}}>Change Layout</button>
		</header>
	);
};

export default Header;
