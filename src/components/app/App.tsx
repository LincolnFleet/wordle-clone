import React, { useState, useEffect } from "react";
import "./app.css";
import { Props } from "../../definitions/types";

import Layout from "../layout/Layout";
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";

interface AppProps extends Props {}

const devData = { attempts: 5, secretWord: "SoSeakrit" };

function App(props: AppProps): JSX.Element {
	const [layoutClass, setLayoutClass] = useState("default");
	const [secretWord, setSecretWord] = useState("");
	const [attempts, setAttempts] = useState(6);

	// Runs: once on init; componentDidMount; getDerivedStateFromProps
	useEffect(() => {
		setSecretWord(devData.secretWord);
		setAttempts(devData.attempts);
	}, []);

	return (
		<div data-testid="App" className="app">
			<Layout layoutClass={layoutClass}>
				<Header setLayoutClass={setLayoutClass} />
				<Content attempts={attempts} secretWord={secretWord} />
				<Footer />
			</Layout>
		</div>
	);
}

export default App;
