import { render, screen } from "@testing-library/react";

import Content from "./Content";

test("renders <Content />", () => {
	render(<Content />);
	const contentElem = screen.getByTestId("content");
	expect(contentElem).toBeInTheDocument();
});
