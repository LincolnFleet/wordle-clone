import React from "react";
import "./footer.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
	return (
		<footer data-testid="footer">
			<div>~~~footer~~~</div>
		</footer>
	);
};

export default Footer;
