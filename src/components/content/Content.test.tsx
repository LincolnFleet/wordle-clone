import { render, screen } from "@testing-library/react";

import Content from "./Content";
const D = { attempts: 5, target: "Readable" };

test("renders <Content />", () => {
	render(<Content attempts={D.attempts} target={D.target} />);
	const contentElem = screen.getByTestId("Content");
	expect(contentElem).toBeInTheDocument();
});
