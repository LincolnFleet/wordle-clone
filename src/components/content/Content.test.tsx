import { render, screen } from "@testing-library/react";

import Content from "./Content";

test("renders <Content />", () => {
	render(<Content />);
	const contentElem = screen.getByTestId("Content");
	expect(contentElem).toBeInTheDocument();
});
