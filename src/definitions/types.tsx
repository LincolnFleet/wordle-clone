import { ReactNode } from "react";

export interface Props {
	children?: ReactNode | ReactNode[];
	style?: React.CSSProperties;
}

export interface Coordinates {
	x: number;
	y: number;
	z?: number;
	h?: number;
}

export interface Dimensions {
	rowCount: number;
	colCount: number;
	depthCount?: number;
}

export interface ReducerAction {
	type: string;
	data: { [index: string]: any };
	pipe?: Function | Function[];
}
