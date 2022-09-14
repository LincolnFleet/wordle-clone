import React from "react";
import "./Footer.css";
import { Props } from "../../definitions/types";

interface FooterProps extends Props {}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
	return (
		<footer data-testid="footer">
			<div>~~~footer~~~</div>
		</footer>
	);
};

export default Footer;
