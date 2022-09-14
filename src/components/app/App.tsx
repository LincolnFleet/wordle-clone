import React from "react";
import "./app.css";
import { Props } from "../../definitions/types";

import Layout from "../layout/Layout";
import Header from "../header/Header";
import Main from "../main_content/Main";
import Footer from "../footer/Footer";

interface AppProps extends Props {}

const App: React.FC<AppProps> = (props: AppProps) => {
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
};

export default App;
