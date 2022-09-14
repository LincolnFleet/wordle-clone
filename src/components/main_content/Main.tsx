import React from "react";
import "./main.css";
import { Props } from "../../definitions/types";

interface MainContentProps extends Props {}

const Main: React.FC<MainContentProps> = (props: MainContentProps) => {
	return (
		<main data-testid="main">
			<div>~~~main~~~</div>
		</main>
	);
};

export default Main;
