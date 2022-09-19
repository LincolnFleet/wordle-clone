import { render, screen } from "@testing-library/react";
import Row from "./Row";

const testProps = {};

test("renders <Row />", () => {
	render(<Row {...testProps} />);
	const lmnt = screen.getByTestId("Row");
	expect(lmnt).toBeInTheDocument();
});
