import React from "react";
import { Props } from "../../definitions/types";

interface TemplateProps extends Props {}

export default function Template(props: TemplateProps): JSX.Element {
	return (
		<div className="template" data-testid="Template">
			{""}
		</div>
	);
}
