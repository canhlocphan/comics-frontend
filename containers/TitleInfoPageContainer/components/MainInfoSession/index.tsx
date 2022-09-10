// libs
import React from "react";
// components
import TitleName from "../TitleName";
import Author from "../Author";
import CategoryList from "../CategoryList";
import ContentAndChapter from "../ContentAndChapter";
import Interactive from "../Interactive";
import Price from "../Price";
// others
import styles from "./styles.module.scss";

interface IMainInfoSession {
	mainInfo: {
		titleName: string;
		author: string;
		content: string;
		chapters: string;
		reads: string;
		likes: string;
		categories: { key: string; tag: string }[];
		price: string;
	};
}

const MainInfoSession = ({ mainInfo }: IMainInfoSession) => {
	const {
		titleName,
		author,
		content,
		chapters,
		reads,
		likes,
		categories,
		price,
	} = mainInfo;
	return (
		<div className={styles["main-info-session-wrapper"]}>
			<div className={styles["main-info-session-wrapper-inner"]}>
				<TitleName titleName={titleName} />
				<Author author={author} />
				<ContentAndChapter {...{ content, chapters }} />
				<Interactive {...{ reads, likes }} />
				<CategoryList categories={categories} />
			</div>
			<Price price={price} />
		</div>
	);
};

export default MainInfoSession;
