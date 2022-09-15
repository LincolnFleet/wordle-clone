import { FC, ReactElement, useState, useEffect, useMemo } from "react";
import "./content.css";
import { Props, Dimensions } from "../../definitions/types";

interface ContentProps extends Props {
	target: String;
	attempts: Number;
}

function makeRowsAndCols({ rows, cols }: Dimensions, guesses: String[]): ReactElement[][] {
	return Array.from({ length: rows }).map((row, idxY) =>
		Array.from({ length: cols }).map((cell, idxX) => (
			<div className={["cell", idxY, idxX].join(" ")}>{guesses[idxY][idxX] || ""}</div>
		))
	);
}

const Content: FC<ContentProps> = ({ target, attempts }: ContentProps) => {
	const [guesses, setGuesses]: [String[], Function] = useState([""]);
	const targetClean: String = useMemo(() => target.trim(), [target]);

	// init, unmount
	useEffect(() => {}, []);

	// make data graph and fill with html cells
	const rowsAndCols = makeRowsAndCols({ rows: attempts, cols: targetClean.length }, guesses);

	return (
		<main data-testid="Content">
			<div className="toolbar">"~~~Toolbar~~~"</div>
			<div className="grid">{rowsAndCols}</div>
		</main>
	);
};

export default Content;
