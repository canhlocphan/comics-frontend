// libs
import React from "react";
// components
import ChapterListHeader from "../ChapterListHeader";
import Chapters from "../Chapters";
// others
import styles from "./styles.module.scss";

interface IChapterList {
	chapters: {
		title: string;
		description?: string;
		image: string;
		isBlocked: boolean;
		price: string;
	}[];
	subTitle: string;
}

const ChapterList = ({ chapters, subTitle }: IChapterList) => (
	<div className={styles["chapter-list-wrapper"]}>
		<ChapterListHeader chapterNum={chapters.length} subTitle={subTitle} />
		<Chapters chapters={chapters} />
	</div>
);

export default ChapterList;
