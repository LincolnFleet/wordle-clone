import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

const testProps = {};

test("renders <Footer />", () => {
	render(<Footer {...testProps} />);
	const lmnt = screen.getByTestId("Footer");
	expect(lmnt).toBeInTheDocument();
});
