// libs
import React from "react";
// components
import RelatedTitleItem from "../RelatedTitleItem";
// others
import styles from "./styles.module.scss";

interface IRelatedTitleList {
	relatedTitles: {
		title: string;
		image: string;
		tag: string;
		type: string;
		reads: string;
	}[];
}

const RelatedTitleList = ({ relatedTitles }: IRelatedTitleList) => (
	<div className={styles["related-title-item-wrapper"]}>
		{relatedTitles.map(({ title, image, tag, type, reads }) => (
			<RelatedTitleItem key={title} {...{ title, image, tag, type, reads }} />
		))}
	</div>
);

export default RelatedTitleList;
