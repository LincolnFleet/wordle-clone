import React from "react";
import "./footer.css";
import { Props } from "../../definitions/types";

interface FooterProps extends Props {}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
	return (
		<footer data-testid="Footer">
			<div>~~~footer~~~</div>
		</footer>
	);
};

export default Footer;
