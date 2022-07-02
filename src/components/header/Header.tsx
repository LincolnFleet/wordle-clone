import React from "react";
import "./header.css";

interface Props {
	children?: JSX.Element[];
}

function Header(props: Props): JSX.Element {
	return <header data-testid="header">~~~Header~~~</header>;
}

export default Header;
