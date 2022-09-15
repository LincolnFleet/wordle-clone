import { ReactNode } from "react";

export function noop(): void {};

export interface Props {
	children?: ReactNode;
}

export interface Coordinates { 
	x: Number;
	y: Number;
	z?: Number;
	h?: Number;
};

export interface Dimensions {
	rows: Number;
	cols: Number;
	depth: Number;
}