import { ReactNode } from "react";

export function noop(): void {}

export interface Props {
	children?: ReactNode;
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
