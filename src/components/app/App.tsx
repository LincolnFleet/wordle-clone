import React from "react";
import "./app.css";
import { Props } from "../../definitions/types";

import Layout from "../layout/Layout";
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";

interface AppProps extends Props {}

const devData = { attempts: 5, secretWord: "Readable" };

function App(props: AppProps): JSX.Element {
	const [layoutClass, setLayoutClass] = React.useState("default");
	const { attempts, secretWord } = devData;

	return (
		<div data-testid="App" className="app">
			<Layout layoutClass={layoutClass}>
				<Header setLayoutClass={setLayoutClass} />
				<Content attempts={attempts} secretWord={secretWord} />
				<Footer />
			</Layout>
		</div>
	);
};

export default App;
