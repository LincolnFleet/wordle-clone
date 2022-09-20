import { render, screen } from "@testing-library/react";
import Template from "./Template";

const devData = {};

test("renders <Template />", () => {
	render(<Template {...devData} />);
	const lmnt = screen.getByTestId("Template");
	expect(lmnt).toBeInTheDocument();
});
