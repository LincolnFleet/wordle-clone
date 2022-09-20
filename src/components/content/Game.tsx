import { useReducer, SyntheticEvent, FormEvent } from "react";
import "./game.css";
import { Coordinates, Props } from "../../definitions/types";
import { charGraphReducer, CELL_SET, CELL_UNSET } from "./char_graph_reducer";
import Toolbar from "../toolbar/Toolbar";

interface GameProps extends Props {
	secretWord: string;
	attempts: number;
}

export default function Game({ secretWord, attempts }: GameProps): JSX.Element {
	const [charGraph, dispatchCharGraph]: [{ [index: string]: any }, Function] = useReducer(
		charGraphReducer,
		Array.from(
			// rows
			{ length: attempts },
			() =>
				Array.from(
					// columns
					{ length: secretWord.length },
					() => "" // value in grid
				)
		)
	);

	const handleOnKeyDown: Function = (
		event: FormEvent<HTMLInputElement>,
		coords: Coordinates
	) => {
		console.log(event);
		/*
		event.preventDefault();

		const { target, stopPropagation } = event;
		const { y, x } = coords;

		switch (target.key) {
            case "ArrowLeft":
                stopPropagation();
                const { nextSibling } = ref.current;
                if (nextSibling) {
                    nextSibling.focus();
                }
                // TODO: focus (idxX - 1) or preceding sibling
                break;
                
                case "ArrowRight":
                    stopPropagation();
                // const {prevSibling} = ref.current;
                if (prevSibling) {
                }
                break;
                

			case "Enter":
				// TODO: submit form
				break;

			case "Backspace":
				stopPropagation();
				dispatchCharGraph({ type: CELL_UNSET, data: coords });
				// TODO: focus (idxX - 1) or preceding sibling
				break;

			default:
				stopPropagation();
				if (/^Key[A-Za-z]{1}$/g.test(key)) {
					// ensure keystroke is a letter
					dispatchCharGraph({ type: CELL_SET, data: coords });
				} else {
					// box shake animation?
				}
            }
            */
	};

	/*
    //this fn will be needed if the form isn't handling arrow keys natively
    //it will need to find an lmnt based on x,y and trigger it's ref's focus()
	const handleOnNavKeyDown: KeyboardEventHandler = () => {};
*/
	const handleOnSubmit = (event: SyntheticEvent): void => {};

	return (
		<main data-testid="Game">
			<div className="grid">
				{charGraph.map((row: string[], y: number) => {
					return (
						<form
							key={y}
							className={`attempt ${y}`}
							onSubmit={(event: SyntheticEvent) => handleOnSubmit(event)}>
							{row.map((char: string, x: number) => {
								return (
									<input
										key={`${y},${x}`}
										className={`cell ${y},${x}`}
										onKeyDown={(event) => handleOnKeyDown({ event, coords: { y, x } })}
										value={char}
									/>
								);
							})}
						</form>
					);
				})}
			</div>
			<Toolbar />
		</main>
	);
}
