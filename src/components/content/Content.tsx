import { FC, ReactElement, useState, useEffect, useMemo } from "react";
import "./content.css";
import { Props, Dimensions } from "../../definitions/types";

interface ContentProps extends Props {
	target: string;
	attempts: number;
}

function makeGraph(
	{ rowCount, colCount }: Dimensions,
	guesses: string[],
	defaultChar: string = ""
): string[][] {
	const graph = Array.from({ length: rowCount }, () =>
		Array.from({ length: colCount }, () => "")
	);

	return graph.map((rows, idxY) => rows.map((cell, idxX) => graph[idxY][idxX] || defaultChar));
}

const Content: FC<ContentProps> = ({ target, attempts }: ContentProps) => {
	const [guesses, setGuesses]: [string[], Function] = useState([""]);
	const targetClean: string = useMemo(() => target.trim(), [target]);

	// init, unmount
	useEffect(() => {}, []);

	// make data graph and fill with html cells
	const charGraph = useMemo(
		() => makeGraph({ rowCount: attempts, colCount: targetClean.length }, guesses),
		[targetClean, attempts, guesses]
	);

	console.log({ charGraph });

	return (
		<main data-testid="Content">
			<div className="toolbar">~~~Toolbar~~~</div>
			<div className="grid">
				{charGraph.map((row) => (
					<div className="row">
						{row.map((char) => (
							<div className="cell">{char}</div>
						))}
					</div>
				))}
			</div>
		</main>
	);
};

export default Content;
