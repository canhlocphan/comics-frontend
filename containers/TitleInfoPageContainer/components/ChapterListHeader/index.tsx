// libs
import React from "react";
// components
import Title from "../../../../components/Title";
import FunctionChapters from "../FunctionChapters";
// others
import styles from "./styles.module.scss";

interface IChapterListHeader {
	chapterNum: number;
	subTitle: string;
}

const ChapterListHeader = ({ chapterNum, subTitle }: IChapterListHeader) => (
	<div className={styles["chapter-list-header-wrapper"]}>
		<div className={styles["chapter-list-header-wrapper-inner"]}>
			<Title title={`${chapterNum} chapters`} />
			<div className={styles["chapter-list-description"]}>{subTitle}</div>
		</div>
		<FunctionChapters />
	</div>
);

export default ChapterListHeader;
