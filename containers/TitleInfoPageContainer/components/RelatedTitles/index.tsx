// libs
import React from "react";
// components
import Title from "../../../../components/Title";
import RelatedTitleList from "../RelatedTitleList";
// dataSources
import { relatedTitles } from "../../../../dataSources";
// others
import styles from "./styles.module.scss";

const RelatedTitles = () => (
	<div className={styles["related-titles-wrapper"]}>
		<Title title="Related Titles" />
		<RelatedTitleList relatedTitles={relatedTitles} />
	</div>
);

export default RelatedTitles;
