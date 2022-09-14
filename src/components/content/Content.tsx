import React from "react";
import "./MainContent.css";
import { Props } from "../../definitions/types";

interface ContentProps extends Props {}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
	return (
		<main data-testid="content">
			<div>~~~Content~~~</div>
		</main>
	);
};

export default Content;
