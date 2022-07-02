import React from "react";
import "./footer.css";

interface Props {
	children?: JSX.Element[];
}

function Footer(props: Props): JSX.Element {
	return (
		<footer data-testid="footer">
			<div>~~~footer~~~</div>
		</footer>
	);
}

export default Footer;
