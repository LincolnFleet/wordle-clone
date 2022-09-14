import React from "react";
import { render, screen } from "@testing-library/react";

import Main from "./Main";

test("renders <Main />", () => {
	render(<Main />);
	const mainElem = screen.getByTestId("main");
	expect(mainElem).toBeInTheDocument();
});
