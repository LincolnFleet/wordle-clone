import { render, screen } from "@testing-library/react";
import Terrible from "./Terrible";

const devData = {};

test("renders <Terrible />", () => {
	render(<Terrible {...devData} />);
	const lmnt = screen.getByTestId("Terrible");
	expect(lmnt).toBeInTheDocument();
});
