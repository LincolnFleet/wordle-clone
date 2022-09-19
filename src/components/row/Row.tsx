import { ReactNode, useState, KeyboardEventHandler, SyntheticEvent } from "react";
import { Coordinates, Props } from "../../definitions/types";

interface RowProps extends Props {
	secretWord: string;
	Y: number;
	isFocused: boolean;
	isLocked: boolean;
	onNavKeyDown: Function;
    coords: Coordinates;
}

export default function Row({
	coords,
	secretWord,
	isFocused,
	isLocked,
    onNavKeyDown
}: RowProps): ReactNode {
	// manages an attempt, storing chars as array
	// horizontal form?
	// submits array of chars, receives array of colors to display
	// returns a "cell" for secretWord.length
	// becomes immutable after submit or before being next sibling
	const [chars, setChars]: [string[], Function] = useState([]);

	const handleOnKeyDown: KeyboardEventHandler = (event) => {
		console.log({ event });
		const { key, currentTarget, preventDefault, stopPropagation } = event;
		preventDefault();

		if (key === "Backspace") {
            stopPropagation();
			setChars((prevGuesses: string[]) => prevGuesses.filter((_, idx) => idx === coords.x));
            currentTarget.textContent = 
			// TODO: focus (idxX - 1) or preceding sibling
		} else if (key === "ArrowDown") {
			// TODO: drill cb to focus (idxY + 1)
		} else if (key === "ArrowUp") {
			// TODO: drill cb to focus (idxY - 1)
		} else if (key === "ArrowLeft") {
			const { nextSibling } = currentTarget;
			if (nextSibling) {
				nextSibling.textContent = "";
			}
			// TODO: focus (idxX - 1) or preceding sibling
		} else if (key === "ArrowRight") {
			// TODO: focus (idxX + 1) or proceeding sibling
			const { nextSibling } = currentTarget;
			
		} else {
			setChars((prevGuesses: string[]) => [...prevGuesses, `${value}`]);
			// TODO: focus (idxX + 1) or proceeding sibling
		}
	};

	return (
		<div className="row" data-testid="Row">
			{chars.map((char, idxX) => {
				return (
					<input className="cell" onKeyDown={handleOnKeyDown}>
						{char}
					</input>
				);
			})}
		</div>
	);
}
