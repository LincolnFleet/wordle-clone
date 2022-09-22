import { render, screen } from "@testing-library/react";
import Game from "./Game";

const devData = { attempts: 5, secretWord: "Readable" };

test("renders <Game />", () => {
	render(<Game {...devData} />);
	const lmnt = screen.getByTestId("Game");
	expect(lmnt).toBeInTheDocument();
});
