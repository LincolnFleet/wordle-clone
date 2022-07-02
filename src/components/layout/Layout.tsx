import React from "react";
import "./layout.css";

interface Props {
	children: JSX.Element[];
}

function LayoutDefault({ children }: Props): JSX.Element {
	return <div className="layout default">{children}</div>;
}

export default LayoutDefault;
