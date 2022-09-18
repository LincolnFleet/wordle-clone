import React from "react";

import { Props } from "../../definitions/types";
interface ToolbarProps extends Props {}

function Toolbar(props: ToolbarProps): JSX.Element {
	return (
		<div className="toolbar" data-testid="Toolbar">
			~~~Toolbar~~~
		</div>
	);
}

export default Toolbar;
