import React from "react";
import "./content.css";
import { Props } from "../../definitions/types";

interface ContentProps extends Props {}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
	return (
		<main data-testid="Content">
			<div>~~~Content~~~</div>
		</main>
	);
};

export default Content;
