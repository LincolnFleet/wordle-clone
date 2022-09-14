import React from "react";
import "./Layout.css";
import { Props } from "../../definitions/types";

interface LayoutProps extends Props {
	layoutClass: String;
}

const Layout: React.FC<LayoutProps> = ({ layoutClass, children }: LayoutProps) => {
	return <div className={"layout " + layoutClass}>{children}</div>;
};

export default Layout;
