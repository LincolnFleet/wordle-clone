import React from "react";
import "./app.css";

import Layout from "../layout/Layout";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

function App(): JSX.Element {
	return (
		<div className="app">
			<Layout>
				<Header />
				<Main />
				<Footer />
			</Layout>
		</div>
	);
}

export default App;
