import { ReducerAction } from "../../definitions/types";

export const CELL_SET = "CELL_SET";
export const CELL_UNSET = "CELL_UNSET";

export function charGraphReducer(state: readonly string[][], action: ReducerAction) {
	const { type, data } = action;
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
				console.error(`Attempted to fill occupied cell with CELL_SET data: \n${data}`);
			}
			return newState;

		case CELL_UNSET:
			newState[y][x] = "";
			return newState;

		default:
			return state;
	}
}
