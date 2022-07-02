import React from "react";
import "./app.css";

import Layout from "../layout/Layout";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

export default function App(): JSX.Element {
	const [layoutClass, setLayoutClass] = React.useState("default");

	return (
		<div data-testid="app" className="app">
			<Layout layoutClass={layoutClass}>
				<Header setLayoutClass={setLayoutClass} />
				<Main />
				<Footer />
			</Layout>
		</div>
	);
}
