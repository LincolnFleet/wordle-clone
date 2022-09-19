import React from "react";
import { ReducerAction } from "../../definitions/types";

export const CELL_SET = "CELL_SET";
export const CELL_UNSET = "CELL_UNSET";

export function charGraphReducer(state: readonly string[][], action: ReducerAction) {
	const { type, data, pipe } = action;
	let newState = [...state];

	const {
		coords: { x, y },
		value,
	} = data;

	switch (type) {
		case CELL_SET:
			if (!newState[y][x]) {
				newState[y][x] = value;
			} else {
				console.error(`Failed CELL_SET with: \ndata: ${data}`);
			}
			return newState;

		case CELL_UNSET:
			newState[y][x] = "";
			return newState;

		default:
			return state;
	}
}
