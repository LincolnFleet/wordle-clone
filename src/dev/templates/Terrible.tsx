import React, { ReactNode } from "react";
import { Props } from "../../definitions/types";

interface TerribleProps extends Props {}

export default function Terrible(props: TerribleProps): ReactNode {
	return (
		<div className="terrible" data-testid="Terrible">
			{""}
		</div>
	);
}
