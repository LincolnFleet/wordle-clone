import React from "react";
import "./layout.css";
import { Props } from "../../definitions/types";

interface LayoutProps extends Props {
	layoutClass: string;
}

function Layout({ layoutClass, children }: LayoutProps): JSX.Element {
	return <div className={"layout " + layoutClass}>{children}</div>;
};

export default Layout;
