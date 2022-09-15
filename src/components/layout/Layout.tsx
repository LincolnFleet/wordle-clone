import React from "react";
import "./layout.css";
import { Props } from "../../definitions/types";

interface LayoutProps extends Props {
	layoutClass: string;
}

const Layout: React.FC<LayoutProps> = ({ layoutClass, children }: LayoutProps) => {
	return <div className={"layout " + layoutClass}>{children}</div>;
};

export default Layout;
