import React, { ReactNode } from "react";
import { Props } from "../../definitions/types";

interface ComponentProps extends Props {}

export default function (props: ComponentProps): ReactNode {
	return <div className="Component" data-testid="Component" />;
}
