import React from "react";
import "./layout.css";
// import types
import { Props } from "../../modules/definitions"

interface localProps extends Props { layoutClass: String };

export default function Layout({ children, layoutClass = "default" }: localProps): JSX.Element {
	return <div className={ "layout " + layoutClass }>{ children }</div>;
}

// export default Layout;
