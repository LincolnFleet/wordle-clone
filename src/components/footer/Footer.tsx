import React from "react";
import "./footer.css";
import { Props } from "../../definitions/types";

interface FooterProps extends Props {}

function Footer(props: FooterProps): JSX.Element {
	return (
		<footer data-testid="Footer">
			<div>~~~footer~~~</div>
		</footer>
	);
};

export default Footer;
