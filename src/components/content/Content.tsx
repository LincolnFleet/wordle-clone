import { useReducer, SyntheticEvent, KeyboardEventHandler, ReactNode, FormEvent } from "react";
import "./content.css";
import { Coordinates, Props } from "../../definitions/types";
import { charGraphReducer, CELL_SET, CELL_UNSET } from "./char_graph_reducer";
import Toolbar from "../toolbar/Toolbar";

interface ContentProps extends Props {
	secretWord: string;
	attempts: number;
}

function Content({ secretWord, attempts }: ContentProps): ReactNode {
	const [charGraph, dispatchCharGraph]: [{ [index: string]: any }, Function] = useReducer(
		charGraphReducer,
		Array.from({ length: attempts }, () => Array.from({ length: secretWord.length }, () => ""))
	);

	const handleOnKeyDown: KeyboardEventHandler = (
		event: SyntheticEvent,
		coords: Coordinates
	): void => {
		event.preventDefault();

		const { key, target, stopPropagation } = event;
		const { y, x } = coords;

		switch (key) {
            
/* hoping form can handle navigation on its own, otherwise will implement
            case "ArrowUp":
                // TODO: drill cb to focus (idxY - 1) || allow to bubble and handle in content
            case "ArrowDown":
                // TODO: drill cb to focus (idxY + 1) || allow to bubble and handle in content
            break;
            
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
                
*/
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
	};

/*
    this fn will be needed if the form isn't handling arrow keys natively
    it will need to find an lmnt based on x,y and trigger it's ref's focus()
	const handleOnNavKeyDown: KeyboardEventHandler = () => {};
*/
    const handleOnSubmit = (event: FormEvent, coords: Coordinates): void => {

    }


	return (
		<main data-testid="Content">
			<div className="grid">
				{charGraph.map((row: string[], y: number) => {
					<form className={`attempt ${y}`} onSubmit={(event) => handleOnSubmit({event, {y,x}})}>
                        {row.map((char, x) => <input
									className={`cell ${y + "," + x}`}
									onKeyDown={(event) => handleOnKeyDown({event, { y, x }})}>
									{char}
								</input>
						)}
					</form>
				})}
			</div>
			<Toolbar />
		</main>
	);
}

export default Content;
