import { ReactNode } from "react";

export function noop(): void {};

export interface Props {
	children?: ReactNode;
}

export interface Coordinates { 
	x: number;
	y: number;
	z?: number;
	h?: number;
};

export interface Dimensions {
	rows: number;
	cols: number;
	depth: number;
}