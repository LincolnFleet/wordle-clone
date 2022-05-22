import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

test("renders <Header />", () => {
	render(<Header />);
	const headerElem = screen.getByTestId("header");
	expect(headerElem).toBeInTheDocument();
});
