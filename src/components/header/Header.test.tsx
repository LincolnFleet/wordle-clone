import { render, screen } from "@testing-library/react";
import Header from "./Header";

const testProps = { setLayoutClass: () => "default" };

test("renders <Header />", () => {
	render(<Header {...testProps} />);
	const lmnt = screen.getByTestId("Header");
	expect(lmnt).toBeInTheDocument();
});
