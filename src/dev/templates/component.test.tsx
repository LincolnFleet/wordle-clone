import { render, screen } from "@testing-library/react";
import Component from "./component";

const devData = {};

test("renders <Component />", () => {
	render(<Component {...devData} />);
	const lmnt = screen.getByTestId("Component");
	expect(lmnt).toBeInTheDocument();
});
