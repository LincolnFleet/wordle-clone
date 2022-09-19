import { ReactNode, RefCallback } from "react";
import { ReducerAction } from "../../definitions/types";

export const CELL_SET = "CELL_SET";
export const CELL_UNSET = "CELL_UNSET";

export function refGraphReducer(
	state: readonly RefCallback<ReactNode>[][],
	action: ReducerAction
) {
	const { type, data, pipe } = action;
	let newState = [...state];

	switch (type) {
		case CELL_SET:
			const { y, x, value } = data;
			if (newState[y][x]) {
				let targetCell = newState[y][x].current;
				targetCell.innerHTML = value;
			} else {
				console.error(`Failed CELL_SET with: \ndata: ${data}`);
			}
			return newState;

		case CELL_UNSET:
			return state;

		default:
			return state;
	}
}
