import { render, screen } from "@testing-library/react";
import Content from "./Content";

const devData = { attempts: 5, secretWord: "Readable" };

test("renders <Content />", () => {
	render(<Content {...devData} />);
	const lmnt = screen.getByTestId("Content");
	expect(lmnt).toBeInTheDocument();
});
