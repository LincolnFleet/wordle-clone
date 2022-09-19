import {
	useState,
	useEffect,
	useReducer,
	SyntheticEvent,
	KeyboardEventHandler,
	ReactNode,
} from "react";
import "./content.css";
import { Coordinates, Props } from "../../definitions/types";
import { noop } from "../../definitions/modules";
import { charGraphReducer, CELL_SET, CELL_UNSET } from "./char_graph_reducer";
import Toolbar from "../toolbar/Toolbar";


interface ContentProps extends Props {
	secretWord: string;
	attempts: number;
}

function Content({ secretWord, attempts }: ContentProps): ReactNode {
	const [charGraph, dispatchCharGraph]: [{ [index: string]: any }, Function] = useReducer(
		charGraphReducer,
		Array.from({ length: attempts }, () =>Array.from({ length: secretWord.length }, () => "")),
	);

    const handleOnKeyDown: KeyboardEventHandler = (event: SyntheticEvent, coords: Coordinates) => {
        event.preventDefault();
        console.log({ event });
		const { key, target, stopPropagation } = event;
        const {y, x} = coords;

        switch (key) {
            case "Backspace":
                stopPropagation();
                dispatchCharGraph({type: CELL_UNSET, data: coords})
                // TODO: focus (idxX - 1) or preceding sibling
            break;

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
                    prevSibling.focus();
                }
            break;

            case "Enter":
                // TODO: submit row/form
            break;
*/
            default:
                stopPropagation();
                if (/^Key[A-Za-z]{1}$/g.test(key)) {  // ensure keystroke is a letter
                    dispatchCharGraph({type: CELL_SET, data: coords})
                } else {
                    // box shake animation?
                }
        }

	const handleOnNavKeyDown: KeyboardEventHandler = () => {};
	const rowProps = {
		onKeyDown: handleOnNavKeyDown,
		handleOnNavKeyDown,
		secretWord,
		coords: { y },
	};

	return (
		<main data-testid="Content">
			<div className="grid">
				{/* ranges in js are dumb AF */}
				{charGraph.map((row: string[], y: number) => {
					<form className={`attempt ${y}`}>
						{row.map((char, x) => {
							return (
								<input className={`cell ${y + "," + x}`} onKeyDown={handleOnKeyDown}>
									{char}
								</input>
							);
						})}
					</form>;
				})}
			</div>
			<Toolbar />
		</main>
	);
}

export default Content;
